import React from "react";
import { FiUser, FiBookOpen, FiSettings } from "react-icons/fi";

const quickLinkCardStyle = {
  display: "flex",
  alignItems: "center",
  background: "#F7F8FA",
  borderRadius: 8,
  padding: "13px 34px 13px 18px",
  minWidth: 260,
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  fontSize: 17,
  color: "#5B5F67",
  marginRight: 30,
  cursor: "pointer",
  boxSizing: "border-box",
  transition: "box-shadow 0.2s",
};

const quickLinkIconWrapper = {
  width: 38,
  height: 38,
  background: "#E9EBEF",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 16,
};

const WhiteShadowCard2 = ({ style = {} }) => (
  <div
    style={{
      width: 1025,
      height: 141,
      position: "absolute",
      top: 434,
      left: 365,
      borderRadius: 10,
      background: "#FFFFFF",
      boxShadow: "0px 0px 4px 2px #00000026",
      ...style,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: 0,
    }}
  >
    <div
      style={{
        width: 103,
        height: 18,
        position: "absolute",
        top: 24,
        left: 22,
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
        fontSize: 18,
        color: "#111827",
      }}
    >
      Quick Links
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 56,
        marginLeft: 22,
        width: "98%",
        gap: 20,
      }}
    >
      {/* Update Personal Details */}
      <div style={quickLinkCardStyle}>
        <span style={quickLinkIconWrapper}>
          <FiUser size={20} color="#A3AAB5" />
        </span>
        Update Personal Details
      </div>

      {/* Update Education & Skills */}
      <div style={quickLinkCardStyle}>
        <span style={quickLinkIconWrapper}>
          <FiBookOpen size={20} color="#A3AAB5" />
        </span>
        Update Education & Skills
      </div>

      {/* Account Settings */}
      <div style={quickLinkCardStyle}>
        <span style={quickLinkIconWrapper}>
          <FiSettings size={20} color="#A3AAB5" />
        </span>
        Account Settings
      </div>
    </div>
  </div>
);

export default WhiteShadowCard2;
