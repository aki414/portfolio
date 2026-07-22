import { education } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section reveal" ref={ref}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Education</p>
            <h2 className="section-title">
              Foundations <em>in progress</em>
            </h2>
          </div>
        </div>

        <div className="edu-grid">
          {education.map((item) => (
            <div className="edu-row" key={item.degree}>
              <div>
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-inst">{item.institution}</div>
              </div>
              <div className="edu-period">
                {item.period}
                {item.note && <span className="edu-note">{item.note}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
