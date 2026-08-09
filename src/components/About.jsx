import { profile } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section reveal" ref={ref}>
      <div className="container">
        <p className="eyebrow">About</p>
        <div className="about-grid" style={{ marginTop: 28 }}>
          <p className="about-bio">{profile.bio}</p>
          <dl className="about-facts">
            <div className="about-fact">
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="about-fact">
              <dt>Currently</dt>
              <dd>Engineering student, EPI — Sousse</dd>
            </div>
            <div className="about-fact">
              <dt>Primary tools</dt>
              <dd>Unity3D, Unreal Engine</dd>
            </div>
            <div className="about-fact">
              <dt>Specialty</dt>
              <dd>VR systems &amp; graphics programming</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
