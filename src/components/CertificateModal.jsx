import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box cert-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <img
          src={certificate.image}
          alt={certificate.title}
          className="cert-modal-image"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="cert-modal-fallback" style={{ display: "none" }}>
          Certificate image not found — add it at{""}
          <code>{certificate.image}</code>
        </div>  

        <h3 className="modal-title">{certificate.title}</h3>
        <p className="modal-subtitle">
          {certificate.org} {certificate.date ? `· ${certificate.date}` : ""}
        </p>
        {certificate.note && <p className="cert-modal-note">{certificate.note}</p>}

        <a
          href={certificate.image}
          target="_blank"
          rel="noreferrer"
          className="cta-primary cert-modal-link"
        >
          <ExternalLink size={16} style={{ marginRight: 8 }} />
          Open Full Size
        </a>
      </div>
    </div>
  );
}