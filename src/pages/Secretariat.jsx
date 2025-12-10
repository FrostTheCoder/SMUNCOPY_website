import React from "react";

const SecretariatSection = ({ secretariat }) => {
  // Helper to render one card
  const renderMember = (m) => (
    <div className="member-card">
      <div className="member-card__photo">
        {m.photo ? (
          <img src={m.photo} alt={m.name} />
        ) : (
          <div className="member-card__placeholder">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>
        )}
      </div>

      <div className="member-card__content">
        <h3 className="member-card__name">{m.name}</h3>
        <span className="member-card__role">{m.role}</span>
      </div>
    </div>
  );

  return (
    <section className="secretariat-grid section-lg">
      <div className="container">
        <div className="secretariat-layout">

          {/* 1 — Sec Gen */}
          <div className="row single">
            {renderMember(secretariat[0])}
          </div>

          {/* 2 — Dep Sec Gen */}
          <div className="row single">
            {renderMember(secretariat[1])}
          </div>

          {/* 3 — DG Comms (2 people) */}
          <div className="row double">
            {renderMember(secretariat[2])}
            {renderMember(secretariat[3])}
          </div>

          {/* 4 — DG Conference (2 people) */}
          <div className="row double">
            {renderMember(secretariat[4])}
            {renderMember(secretariat[5])}
          </div>

          {/* 5 — DG Outreach (2 people) */}
          <div className="row double">
            {renderMember(secretariat[6])}
            {renderMember(secretariat[7])}
          </div>

          {/* 6 — Editor-in-Chief */}
          <div className="row single">
            {renderMember(secretariat[8])}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretariatSection;
