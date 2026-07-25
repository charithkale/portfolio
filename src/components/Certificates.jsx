import React, { useState } from "react";
import { CERTIFICATES } from "../data";
import CertificateModal from "./CertificateModal";

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="section">
      <h2 className="section-title">
        CERTIFICATES<span className="accent">.</span>
      </h2>
      <div className="cert-grid">
        {CERTIFICATES.map((c) => (
          <div
            key={c.title}
            className="cert-card cert-card-clickable"
            onClick={() => setSelected(c)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelected(c)}
          >
            <h3 className="cert-title">{c.title}</h3>
            <p className="cert-org">{c.org}</p>
            <span className="cert-view-hint">View certificate →</span>
          </div>
        ))}
      </div>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}