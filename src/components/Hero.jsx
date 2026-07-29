import React from "react";
import profile from "../assets/Profile linkedin dark (1).png";
export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">PYTHON FULL-STACK DEVELOPER</h1>
          <p className="hero-bio">
            Hi, I'm <strong>Charith Kale</strong>, a Python full-stack developer focused on
            building responsive web apps. Passionate about creating clean UI designs, scalable
            backend systems, and efficient database management solutions. Strong understanding
            of frontend and backend integration with a focus on performance, problem-solving,
            and user experience. Continuously learning modern technologies and building
            real-world projects to enhance development expertise.
          </p>
          <div className="hero-buttons">
            <a href="/public/Charith Kale Resume.pdf" download className="cta-primary">
              RESUME
            </a>
            <button className="cta-outline" onClick={() => scrollTo("About")}>
              CONTACT ME
            </button>
          </div>
          <div className="social-row">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="github-logo" className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/charith-kale" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            </a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="avatar-ring">
            <img src={profile} alt="Charith Kale" className="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
