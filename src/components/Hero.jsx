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
            </a>
            <a href="https://www.linkedin.com/in/charith-kale" target="_blank" rel="noreferrer" aria-label="LinkedIn">
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVR4nO2ZP0vDQByGkwsOruIkuGpXP4GLWyuufgk/g4OUXHFQEId2cFFwcHJUsC1mFPGutNpCLdY6VIp/2kT7N/1J0latbbGJklzgHninHMf75HdZLoLA4XA4TCPJdAXJJI5kqiFMwZHIVBMxjUkyWf5TeRET7FhpPDwiJkH7b97l8qgbKUQClgXMY8NAeWRMQaZR6wKYqG4XR73IpGJDgIHi+Cv/JuCLpOG8oIHW0EEpaDAfTntLQClo8J34veYtAa2h9wmodd1bAorXJ+CLpE0JYxKxvApz4RtvCSCXInAB3Mkwxnk+u3sN2xclSJWqUG224bXWMo/i2ukDTG4m2BZY2MvA41sTRnFZfIeZnRS7AtmXOvxGLK+CxKrAuPiPcmwK6G0wz//S4S2sHucheqcOXbeffGZTYF0p9q2ZCCXgJFcZWJd5qrEpML2dHNhn8SA7sK5ca7En0P7xvJepreTYa12fgN29EBfAXMCEC2AuQLkA4gIWGbWRWxE8fbWIadmygHE/z0BxMCJiemZZwPi54HZx1I2Er/yWBTpTIEG3y4uYbNgq/zmJEAkY9/POfhNENY6N7TfP4XA4glN8AJJwntfiYf8PAAAAAElFTkSuQmCC" alt="linkedin" className="icon"></img>
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
