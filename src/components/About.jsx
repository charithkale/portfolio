import React, { useState } from "react";
import { Mail } from "lucide-react";
import ContactModal from "./ContactModel";

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="section">
      <h2 className="section-title">
        ABOUT<span className="accent">.</span>
      </h2>
      <div className="about-wrap">
        <p className="about-text">
          I'm a recent Computer Science & Engineering graduate from Raghu Institute of
          Technology, Visakhapatnam, with a background in full-stack web development. I enjoy
          turning ideas into clean, functional products — from responsive React interfaces to
          Django-powered backends — and I'm currently exploring opportunities in software
          engineering and data analytics.
        </p>
        <button className="cta-primary" onClick={() => setModalOpen(true)}>
          <Mail size={16} style={{ marginRight: 8 }} />
          GET IN TOUCH
        </button>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}