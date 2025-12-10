import React from "react";
import { User } from "lucide-react"; // Importing an icon for placeholders

// Re-structure the data to make grouping easier in the component
const secretariatData = [
  { role: "Secretary General", name: "Aarshia Kaushik", img: "/team/sg.jpg", tier: 1 },
  { role: "Deputy Secretary General", name: "Vedant Prakash", img: "/team/dsg.jpg", tier: 2 },
  { role: "Director General – Communications", name: "Person 1", img: "/team/dg-comms-1.jpg", tier: 3 },
  { role: "Director General – Communications", name: "Person 2", img: "/team/dg-comms-2.jpg", tier: 3 },
  { role: "Director General – Conference", name: "Person 3", img: "/team/dg-conf-1.jpg", tier: 3 },
  { role: "Director General – Conference", name: "Person 4", img: "/team/dg-conf-2.jpg", tier: 3 },
  { role: "Director General – Outreach", name: "Person 5", img: "/team/dg-out-1.jpg", tier: 3 },
  { role: "Director General – Outreach", name: "Person 6", img: "/team/dg-out-2.jpg", tier: 3 },
  { role: "Editor-in-Chief", name: "Person 7", img: "/team/eic.jpg", tier: 4 },
];

// Helper function to render a single member card
const MemberCard = ({ name, role, img, placeholder }) => (
  <div className="member-card fade-up">
    <div className="member-card__photo">
      {img && !placeholder ? (
        <img src={img} alt={name} loading="lazy" />
      ) : (
        <div className="member-card__placeholder">
          <User />
        </div>
      )}
    </div>
    <p className="member-card__name">{name}</p>
    <p className="member-card__role">{role}</p>
  </div>
);

// Helper function to group members by a key (e.g., role)
const groupBy = (array, key) =>
  array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});

export default function Secretariat() {
  const topMembers = secretariatData.filter((m) => m.tier <= 2);
  const dgMembers = secretariatData.filter((m) => m.tier === 3);
  const eicMember = secretariatData.find((m) => m.tier === 4);

  // Group DGs for display by their role name
  const groupedDGs = groupBy(dgMembers, "role");

  return (
    <section className="section">
      <div className="container center">
        {/* Title/Hero Section based on secretariat.css */}
        <div className="secretariat-hero">
          <h1 className="secretariat-hero__title">The Secretariat</h1>
          <p className="secretariat-hero__subtitle">
            Leading the Charge for Excellence
          </p>
        </div>

        {/* --- Top Leadership (Sec Gen & Dep Sec Gen) --- */}
        <div className="container" style={{ maxWidth: '800px', margin: '4rem auto' }}>
          {topMembers.map((m, i) => (
            <div key={i} className="mb-16"> {/* Add margin below each top member */}
              <MemberCard
                name={m.name}
                role={m.role}
                img={m.img}
              />
              {/* Add a decorative divider between Sec Gen and Dep Sec Gen */}
              {i === 0 && (
                <div className="ornament mt-8 mb-16"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* --- Director Generals Grouping --- */}
        <div className="container center mt-16">
          <h2 className="font-accent text-orange" style={{ fontSize: 'var(--text-4xl)'}}>
            Director Generals
          </h2>
          <div className="ornament mt-4 mb-16"></div>

          {/* Iterate over the grouped DG roles */}
          {Object.entries(groupedDGs).map(([role, members]) => (
            <div key={role} className="mb-16">
              {/* Group Title - Use a different font/style for group headers if needed */}
              <h3 className="font-accent text-cream small-uppercase mb-12">
                {role}
              </h3>
              
              {/* Render members in a flexible grid (using secretariat-grid__container) */}
              <div className="secretariat-grid__container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                {members.map((m, i) => (
                  <MemberCard
                    key={i}
                    name={m.name}
                    role={m.role}
                    img={m.img}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- Editor-in-Chief (Bottom/Special Role) --- */}
        {eicMember && (
          <div className="container center mt-16 pt-16 border-top">
            <h2 className="font-accent text-orange" style={{ fontSize: 'var(--text-4xl)'}}>
              Publications
            </h2>
            <div className="ornament mt-4 mb-16"></div>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <MemberCard
                    name={eicMember.name}
                    role={eicMember.role}
                    img={eicMember.img}
                />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
