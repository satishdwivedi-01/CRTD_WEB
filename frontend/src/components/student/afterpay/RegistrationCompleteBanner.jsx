import React from "react";

const RegistrationCompleteBanner = () => (
  <div
    style={{
      width: 1036,
      height: 72,
      background: "#F0FFF6",
      borderRadius: 0,
      display: "flex",
      alignItems: "center",
      position: "absolute",
      top: 120,
      left: 365,
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: 18,
      boxSizing: "border-box"
    }}
  >
    <div
      style={{

        width: 8,
        height: "100%",
        background: "#36CA65",
        borderRadius: "2px 0 0 2px",
        marginRight: 32
      }}
    />
    <div>
      <div
        style={{
          fontWeight: 500,
          color: "#397F53",
          fontSize: 18,
        }}
      >
        Registration Complete
      </div>
      <div
        style={{
          color: "#397F53",
          fontSize: 17,
          marginTop: 2,
        }}
      >
        Your account is fully active with premium access until 2026-06-02.
      </div>
    </div>
  </div>
);

export default RegistrationCompleteBanner;