import { useEffect, useRef } from "react";
import { profile } from "../data/portfolio";

export default function Hero() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    function handleMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      grid.style.transform = `rotateX(${75 - y}deg) rotateZ(${x * 0.4}deg)`;
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <header id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid-wrap" aria-hidden="true">
        <div className="hero-grid" ref={gridRef} />
      </div>

      <div className="hero-hud" aria-hidden="true">
        <div className="hud-corner tl">
          <span>SCENE — HERO_01</span>
          <span>RENDER — REALTIME</span>
        </div>
        <div className="hud-corner tr">
          <span>LAT 35.5041° N</span>
          <span>LNG 11.0122° E — TUNISIA</span>
        </div>
        <div className="hud-corner br">
          <span>BUILD 2026.07</span>
        </div>
      </div>

      <div className="hero-content container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">{profile.focus}</p>
            <h1 className="hero-name">
              Akrem <em>Sedki</em>
            </h1>
            <p className="hero-role">
              <strong>{profile.role}</strong> — {profile.tagline}
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in Touch
              </a>
            </div>

            <div className="hero-badges" aria-label="Key details">
              <div className="hero-badge">
                <span className="hero-badge-label">Based in</span>
                <span className="hero-badge-value">{profile.location}</span>
              </div>
              <div className="hero-badge">
                <span className="hero-badge-label">Focus</span>
                <span className="hero-badge-value">VR systems, Unity</span>
              </div>
              <div className="hero-badge">
                <span className="hero-badge-label">Style</span>
                <span className="hero-badge-value">Performance-first interaction design</span>
              </div>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Portfolio snapshot">
            <div className="hero-panel-top">
              <span className="hero-panel-label">Portfolio snapshot</span>
              <span className="hero-panel-chip">Open to collaboration</span>
            </div>

            <div className="hero-panel-main">
              <p className="hero-panel-title">Interactive systems built for clarity under pressure.</p>
              
            </div>

            <dl className="hero-metrics">
              <div className="hero-metric">
                <dt>Primary stack</dt>
                <dd>Unity3D / C# / VR</dd>
              </div>
              <div className="hero-metric">
                <dt>Current focus</dt>
                <dd>{profile.focus}</dd>
              </div>
              <div className="hero-metric">
                <dt>Work scope</dt>
                <dd>XR, gameplay systems, optimization</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="hero-footerline">
          <span>Scroll for selected work</span>
          <span>{profile.location}</span>
          <span>{profile.email}</span>
        </div>
      </div>
    </header>
  );
}
