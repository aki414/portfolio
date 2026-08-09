import { projects } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import ImageCarousel from "./ImageCarousel";

function ProjectRow({ project }) {
  return (
    <div className={`project-row${project.featured ? " featured" : ""}`}>
      <div className="project-heading">
        <span className="project-category">{project.category}</span>
        <h3 className="project-name">{project.name}</h3>
        <span className="project-context">{project.context}</span>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-preview" aria-label={`${project.name} preview`}>
        <ImageCarousel images={[project.preview]} />
      </div>
      <div className="project-meta">
        <span className="project-year">{project.year}</span>
        <div className="stack-tags">
          {project.stack.map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useReveal();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section reveal" ref={ref}>
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">
              Projects that shaped <em>the craft</em>
            </h2>
          </div>
          <div className="section-index">
            {String(projects.length).padStart(2, "0")} PROJECTS
            <br />
            2025 — 2026
          </div>
        </div>

        <div className="project-list">
          {featured.map((p) => (
            <ProjectRow project={p} key={p.id} />
          ))}
          {rest.map((p) => (
            <ProjectRow project={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
