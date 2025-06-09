import React, { useState } from "react";
import { FaCheckCircle, FaLock, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import PaymentModal from "./PaymentModal";


const PremiumMembershipCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          width: "959px",
          borderRadius: "10px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 4px 2px #00000026",
          border: "1px solid #E6E6E6",
          padding: "32px",
          margin: "0 auto",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <div>
            <h2
              style={{
                fontWeight: 700,
                fontSize: 28,
                margin: 0,
                color: "#000000",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              1-Year Premium Membership
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontWeight: 800,
                fontSize: 32,
                fontFamily: "Poppins, sans-serif",
                color: "#000000",
              }}
            >
              ₹1,000
            </div>
            <div
              style={{
                color: "#666",
                fontSize: 14,
                fontFamily: "Poppins, sans-serif",
                marginTop: 4,
              }}
            >
              per year
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ marginBottom: 24, borderColor: "#E6E6E6" }} />

        {/* Features */}
        <div style={{ marginBottom: 24 }}>
          {[
            "Unlimited Job Applications",
            "Personal Mentorship Support",
            "Premium Career Resources",
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: index !== 2 ? 10 : 0,
              }}
            >
              <FaCheckCircle color="#1DBF73" size={19} style={{ marginRight: 10 }} />
              <span
                style={{
                  fontSize: 18,
                  color: "#222",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Security Info */}
        <div
          style={{
            background: "#F8FAFC",
            borderRadius: "6px",
            padding: "16px 20px",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 16,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", color: "#7B7B7B" }}>
            <FaLock style={{ marginRight: 10 }} />
            Your payment information is encrypted
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              color: "#1DBF73",
              fontWeight: 500,
            }}
          >
            <FaShieldAlt style={{ marginRight: 6 }} />
            100% Secure Checkout
          </span>
        </div>

        {/* Button */}
        <button
          style={{
            background: "#484F59",
            color: "#fff",
            fontWeight: 600,
            fontSize: 20,
            border: "none",
            borderRadius: "8px",
            width: "100%",
            height: "56px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Poppins, sans-serif",
          }}
          onClick={() => setOpen(true)}
        >
          Pay ₹1000 &amp; Get Access
          <FaArrowRight style={{ marginLeft: 12, fontSize: 20 }} />
        </button>
      </div>
      <PaymentModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default PremiumMembershipCard;