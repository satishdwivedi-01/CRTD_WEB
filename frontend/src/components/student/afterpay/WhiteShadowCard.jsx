import React from "react";

const statStyle = {
  flex: 1,
  background: "#F7F8FA",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingLeft: 30,
  paddingRight: 0,
  height: "100%",
  minWidth: 0
};

const labelStyle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  fontSize: 16,
  color: "#757C87",
  marginBottom: 0,
  lineHeight: "100%",
  marginTop: 0,
  marginLeft: 0,
};

const valueStyle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  color: "#111",
  lineHeight: "100%",
};

// Change this divider to a subtle light gray or transparent
const dividerStyle = {
  width: 1,
  height: 48,
  background: "#E7EAF1", // Light gray, or use "transparent" to remove completely
  alignSelf: "center",
  margin: "0 0px",
  borderRadius: 2,
};

const WhiteShadowCard = () => (
  <div
    style={{
      width: 1025,
      height: 157,
      position: "absolute",
      top: 240,
      left: 365,
      borderRadius: 10,
      background: "#FFFFFF",
      boxShadow: "0px 0px 4px 2px #00000026",
      display: "flex",
      flexDirection: "column",
      padding: 0,
    }}
  >
    {/* Account Overview Heading */}
    <div
      style={{
        width: 164,
        height: 18,
        position: "absolute",
        top: 24,
        left: 21,
        fontFamily: "Poppins, sans-serif",
        fontWeight: 500,
        fontSize: 18,
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#222",
      }}
    >
      Account Overview
    </div>
    {/* Stats Bar */}
    <div
      style={{
        width: 982,
        height: 74,
        borderRadius: 7,
        background: "transparent",
        display: "flex",
        alignItems: "stretch",
        position: "absolute",
        top: 58,
        left: 22,
        gap:10,
      }}
    >
      <div style={statStyle}>
        <div style={labelStyle}>Profile Completion</div>
        <div style={valueStyle}>100%</div>
      </div>
      <div style={dividerStyle}></div>
      <div style={statStyle}>
        <div style={labelStyle}>Membership Valid Till</div>
        <div style={valueStyle}>2026-06-02</div>
      </div>
      <div style={dividerStyle}></div>
      <div style={statStyle}>
        <div style={labelStyle}>Jobs Applied</div>
        <div style={valueStyle}>0</div>
      </div>
      <div style={dividerStyle}></div>
      <div style={{ ...statStyle, paddingRight: 30 }}>
        <div style={labelStyle}>Guidance Sessions</div>
        <div style={valueStyle}>0</div>
      </div>
    </div>
  </div>
);

export default WhiteShadowCard;