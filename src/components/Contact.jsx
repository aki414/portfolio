import { profile } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="contact-section reveal" ref={ref}>
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          Contact
        </p>
        <h2 className="contact-title" style={{ marginTop: 20 }}>
          Let's build something <em>real-time</em>.
        </h2>
        <p className="contact-sub">
          Open to VR/Unity roles, freelance builds, and collaborations on
          interactive experiences.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Email Me
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="btn btn-ghost">
            Call
          </a>
        </div>
        <div className="contact-details">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
