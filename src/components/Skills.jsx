import { skillGroups, spokenLanguages } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section reveal" ref={ref}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Toolset</p>
            <h2 className="section-title">
              Built for <em>real-time</em> work
            </h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.label}>
              <span className="skill-label">{group.label}</span>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span className="skill-item" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="languages-row">
          <span>Spoken:</span>
          {spokenLanguages.map((lang) => (
            <span className="lang-pill" key={lang}>
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
