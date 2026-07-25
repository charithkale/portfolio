import React from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        PROJECTS<span className="accent">.</span>
      </h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{p.title}</h3>
              <ExternalLink size={16} color="#888" />
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="tag-row">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
