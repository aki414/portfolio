import React, { useEffect, useRef, useState } from "react";

function seekVideoFrame(video, time) {
  return new Promise((resolve) => {
    const handler = () => {
      video.removeEventListener("seeked", handler);
      resolve();
    };
    video.addEventListener("seeked", handler);
    video.currentTime = Math.min(time, Math.max(0, video.duration || 0));
  });
}

export default function ImageCarousel({ videoSrc, images = [], slides = 3 }) {
  const [slidesSrc, setSlidesSrc] = useState(images);
  const [index, setIndex] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    let cancelled = false;
    if (images && images.length > 0) {
      setSlidesSrc(images);
      return;
    }

    async function generate() {
      try {
        const video = document.createElement("video");
        video.src = videoSrc;
        video.crossOrigin = "anonymous";
        video.muted = true;
        await video.play().catch(() => {});
        await new Promise((r) => (video.onloadedmetadata = r));

        const times = [];
        for (let i = 1; i <= slides; i++) times.push((i / (slides + 1)) * video.duration);

        const canvas = document.createElement("canvas");
        const scale = 0.6;
        canvas.width = Math.max(320, video.videoWidth * scale);
        canvas.height = Math.max(180, video.videoHeight * scale);
        const ctx = canvas.getContext("2d");

        const out = [];
        for (const t of times) {
          await seekVideoFrame(video, t);
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const data = canvas.toDataURL("image/jpeg", 0.8);
          out.push(data);
          if (cancelled) break;
        }

        if (!cancelled) setSlidesSrc(out);
        video.pause();
      } catch (e) {
        // fail silently — fallback will show empty area
      }
    }

    if (!mounted.current) {
      mounted.current = true;
      generate();
    }

    return () => {
      cancelled = true;
    };
  }, [videoSrc, images, slides]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % Math.max(1, slidesSrc.length)), 5000);
    return () => clearInterval(id);
  }, [slidesSrc.length]);

  if (!slidesSrc || slidesSrc.length === 0) {
    return <div className="carousel-placeholder" aria-hidden="true" />;
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      onClick={() => setIndex((i) => (i + 1) % slidesSrc.length)}
    >
      <div className="carousel-track">
        {slidesSrc.map((s, i) => (
          <div
            className={`carousel-slide ${i === index ? "active" : ""}`}
            key={i}
            aria-hidden={i !== index}
          >
            <img src={s} alt="project preview" />
          </div>
        ))}
      </div>
    </div>
  );
}
