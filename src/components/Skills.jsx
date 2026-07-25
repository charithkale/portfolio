import React from "react";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        SKILLS<span className="accent">.</span>
      </h2>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <div key={s.group} className="skill-card">
            <h3 className="skill-group-title">{s.group}</h3>
            <ul className="skill-list">
              {s.items.map((item) => (
                <li key={item} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
