import React from "react";

const secretariat = [
  { role: "Secretary General", name: "Aarshia Kaushik", img: "/team/sg.jpg" },
  { role: "Deputy Secretary General", name: "Vedant Prakash", img: "/team/dsg.jpg" },

  { role: "Director General – Committees", name: "Person 1", img: "/team/dg-comm-1.jpg" },
  { role: "Director General – Committees", name: "Person 2", img: "/team/dg-comm-2.jpg" },

  { role: "Director General – Conference", name: "Person 3", img: "/team/dg-conf-1.jpg" },
  { role: "Director General – Conference", name: "Person 4", img: "/team/dg-conf-2.jpg" },

  { role: "Director General – Outreach", name: "Person 5", img: "/team/dg-out-1.jpg" },
  { role: "Director General – Outreach", name: "Person 6", img: "/team/dg-out-2.jpg" },

  { role: "Editor-in-Chief", name: "Person 7", img: "/team/eic.jpg" },
];

export default function Secretariat() {
  return (
    <section className="section">
      <div className="container center">
        <h1 className="font-accent text-gold title">Secretariat</h1>

        <div className="grid-3 gap-12 mt-16">
          {secretariat.map((m, i) => (
            <div key={i} className="center fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              
              {/* PERFECT CIRCLES — NO BORDER — MATCH HOME PAGE */}
              <div
                className="circle-large"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: "var(--space-6)",
                }}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* ROLE */}
              <h3 className="font-accent text-orange small-uppercase">
                {m.role}
              </h3>

              {/* NAME */}
              <p className="text-cream mt-2" style={{ fontSize: "1.1rem" }}>
                {m.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
