import React from "react";

const tips = [
  "Keep your profile updated to increase visibility to employers",
  "Apply for jobs that match your skills for better success rates",
  "Regularly update your resume with new skills and certifications",
];

const ResourcesTipsCard = () => (
  <div
    style={{
      width: 1024,
      height: 181,
      position: "absolute",
      top: 615,
      left: 364,
      borderRadius: 15,
      background: "#EFF6FF",
      border: "1px solid #E3EBF6",
      padding: "28px 38px",
      boxSizing: "border-box",
      fontFamily: "Poppins, sans-serif",
      color: "#27417A",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
  >
    <div
      style={{
        fontWeight: 600,
        fontSize: 20,
        marginBottom: 12,
        color: "#27417A"
      }}
    >
      Resources & Tips
    </div>
    <ul style={{margin: 0, padding: 0, listStyle: "none"}}>
      {tips.map((tip, idx) => (
        <li key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 8, fontSize: 17 }}>
          <span style={{marginRight: 14, color: "#27417A", display: "flex", alignItems: "center"}}>
            {/* Right/Check Icon */}
            <svg width="19" height="19" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9" stroke="#27417A" strokeWidth="1.5" fill="none"/>
              <path d="M7 10.5l2 2 4-4" stroke="#27417A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span style={{ color: "#27417A" }}>{tip}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ResourcesTipsCard;