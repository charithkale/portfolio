import React, { useEffect } from "react";
import { Phone, Mail, X } from "lucide-react";
import { PROFILE } from "../data";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${encodeURIComponent(
  "Portfolio Inquiry"
)}`;

export default function ContactModal({ open, onClose }) {
  // close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <h3 className="modal-title">How would you like to reach me?</h3>
        <p className="modal-subtitle">Choose an option below</p>

        <div className="modal-options">
          <a href={`tel:${PROFILE.phone}`} className="modal-option" onClick={onClose}>
            <Phone size={22} className="modal-option-icon" />
            <div>
              <div className="modal-option-title">Phone</div>
              <div className="modal-option-sub">{PROFILE.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="modal-option"
            onClick={onClose}
          >
            <Mail size={22} className="modal-option-icon" />
            <div>
              <div className="modal-option-title">Email</div>
              <div className="modal-option-sub">{PROFILE.email}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}