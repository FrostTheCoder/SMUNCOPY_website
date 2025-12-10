import React from "react";
import "./Secretariat.css";

const Secretariat = () => {
  const secretariat = [
    { role: "Secretary General", name: "Aarshia Kaushik", photo: null },

    { role: "Deputy Secretary General", name: "Vedant Prakash", photo: null },

    { role: "Director General – Committees", name: "Person 1", photo: null },
    { role: "Director General – Committees", name: "Person 2", photo: null },

    { role: "Director General – Conference", name: "Person 3", photo: null },
    { role: "Director General – Conference", name: "Person 4", photo: null },

    { role: "Director General – Outreach", name: "Person 5", photo: null },
    { role: "Director General – Outreach", name: "Person 6", photo: null },

    { role: "Editor-in-Chief", name: "Person 7", photo: null },
  ];

  return (
    <section className="secretariat-grid section-lg">
      <h2 className="section-title">Secretariat</h2>
      <div className="secretariat-grid__container">
        
        {/* Row 1 – 1 SG */}
        <div className="grid-row full-center">
          {renderMember(secretariat[0])}
        </div>

        {/* Row 2 – 1 DSG */}
        <div className="grid-row full-center">
          {renderMember(secretariat[1])}
        </div>

        {/* Row 3 – 2 DG Committees */}
        <div className="grid-row two-col">
          {renderMember(secretariat[2])}
          {renderMember(secretariat[3])}
        </div>

        {/* Row 4 – 2 DG Conference */}
        <div className="grid-row two-col">
          {renderMember(secretariat[4])}
          {renderMember(secretariat[5])}
        </div>

        {/* Row 5 – 2 DG Outreach */}
        <div className="grid-row two-col">
          {renderMember(secretariat[6])}
          {renderMember(secretariat[7])}
        </div>

        {/* Row 6 – 1 Editor-in-Chief */}
        <div className="grid-row full-center">
          {renderMember(secretariat[8])}
        </div>

      </div>
    </section>
  );
};

const renderMember = (member) => {
  return (
    <div className="secretariat-card">
      <div className="secretariat-card__image">
        {member.photo ? (
          <img src={member.photo} alt={member.name} />
        ) : (
          <div className="placeholder-image" />
        )}
      </div>
      <h3 className="secretariat-card__name">{member.name}</h3>
      <p className="secretariat-card__role">{member.role}</p>
    </div>
  );
};

export default Secretariat;
