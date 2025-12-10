import React from "react";
import { User } from "lucide-react";

// NOTE: Adjusted Director General roles to match the second image (comms, confs, outreach)
const secretariatData = [
  { role: "Secretary General", name: "Aarshia Kaushik", img: "/team/sg.jpg", tier: 1 },
  { role: "Deputy Secretary General", name: "Vedant Prakash", img: "/team/dsg.jpg", tier: 2 },
  
  { role: "Director General – Comms", name: "Person 1", img: "/team/dg-comms-1.jpg", tier: 3 },
  { role: "Director General – Comms", name: "Person 2", img: "/team/dg-comms-2.jpg", tier: 3 },
  
  { role: "Director General – Conf", name: "Person 3", img: "/team/dg-conf-1.jpg", tier: 3 },
  { role: "Director General – Conf", name: "Person 4", img: "/team/dg-conf-2.jpg", tier: 3 },

  { role: "Director General – Outreach", name: "Person 5", img: "/team/dg-out-1.jpg", tier: 3 },
  { role: "Director General – Outreach", name: "Person 6", img: "/team/dg-out-2.jpg", tier: 3 },

  { role: "Editor-in-Chief", name: "Person 7", img: "/team/eic.jpg", tier: 4 },
];

// Reusable Member Card component (ensures centered content via 'member-card')
const MemberCard = ({ name, role, img, placeholder }) => (
  // The 'member-card' class already includes 'text-align: center;' from secretariat.css
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

// Helper function to group members by a key
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

  const groupedDGs = groupBy(dgMembers, "role");

  return (
    <section className="section">
      {/* Ensure the main container's contents are centered */}
      <div className="container center"> 
        
        <div className="secretariat-hero">
          <h1 className="secretariat-hero__title">The Secretariat</h1>
          <p className="secretariat-hero__subtitle">
            Leading the Charge for Excellence
          </p>
        </div>

        {/* --- Top Leadership (Sec Gen & Dep Sec Gen) --- */}
        {/* Use a narrow container to force the top two into a single, centered column */}
        <div className="container" style={{ maxWidth: '400px', margin: '4rem auto' }}>
          {topMembers.map((m, i) => (
            <div key={i} className="mb-16">
              <MemberCard
                name={m.name}
                role={m.role}
                img={m.img}
              />
              {/* Divider between top roles */}
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
              {/* Group Title - Centered by the container */}
              <h3 className="font-accent text-cream small-uppercase mb-12">
                {role}
              </h3>
              
              {/* Render members in a flexible grid. The MemberCard handles centering internally. */}
              <div className="secretariat-grid__container">
                {members.map((m, i) => (
                  <MemberCard
                    key={i}
                    name={m.name}
                    role={m.role}
                    img={m.img}
                  />
                ))}
              </div>
              {/* Optional: Add a subtle divider between DG groups for visual separation */}
              <div className="divider mt-16"></div>
            </div>
          ))}
        </div>

        {/* --- Editor-in-Chief (Bottom/Special Role) --- */}
        {eicMember && (
          <div className="container center mt-16 pt-16">
            <h2 className="font-accent text-orange" style={{ fontSize: 'var(--text-4xl)'}}>
              Publications
            </h2>
            <div className="ornament mt-4 mb-16"></div>
            {/* Narrow container to center the single EIC card */}
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
