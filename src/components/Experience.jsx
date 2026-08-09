import { experience } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section reveal" ref={ref}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">
              Where the work <em>happened</em>
            </h2>
          </div>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.role + item.period}>
              <div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-tag">{item.tag}</div>
              </div>
              <div>
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-org">{item.org}</div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
