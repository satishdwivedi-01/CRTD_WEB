import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const InactiveAccountNotice = () => (
  <div
    style={{
      width: "959px",
      height: "90px",
      border: "1px solid #FDE68A",
      borderRadius: "6px",
      background: "#FFFBEB",
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      boxSizing: "border-box",
      margin: "0 auto"
    }}
  >
    <FaInfoCircle color="#D97706" size={18} style={{ marginRight: 14 }} />
    <span
      style={{
        color: "#92400E",
        fontSize: "18px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        lineHeight: "24px"
      }}
    >
      Your account will remain inactive until payment is completed. By proceeding, you agree to our <span style={{ textDecoration: "underline", cursor: "pointer" }}>Terms of Service</span> and <span style={{ textDecoration: "underline", cursor: "pointer" }}>Payment Policy</span>.
    </span>
  </div>
);

export default InactiveAccountNotice;