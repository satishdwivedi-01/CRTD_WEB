import React from "react";

const PaymentModal = ({ open, onClose, onPayNow }) => {
  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onPayNow) onPayNow();
  };

  return (
    <div 
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.32)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: 936,
          height: 554,
          background: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          display: "flex",
          boxShadow: "0 6px 32px rgba(0,0,0,0.18)"
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Left: Payment methods */}
        <div style={{ background: "#F6F9FF", width: 355, height: "100%", borderRight: "1px solid #E7EAF1", display: "flex", flexDirection: "column" }}>
          <div style={{
            height: 62,
            background: "#fff",
            borderBottom: "1px solid #E7EAF1",
            display: "flex",
            alignItems: "center",
            paddingLeft: 32,
            fontWeight: 600,
            color: '#222',
            fontSize: 18,
            fontFamily: "Poppins, sans-serif"
          }}>
            Select a payment method
          </div>
          <div>
            {/* Credit/Debit Card selected */}
            <div style={{
              background: "#E5EBF8",
              borderLeft: "4px solid #2E7CF6",
              fontWeight: 600,
              color: "#222",
              fontFamily: "Poppins, sans-serif",
              padding: "18px 20px 8px 38px",
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              borderBottom: "1px solid #E7EAF1",
              cursor: "pointer"
            }}>
              <span style={{
                background: "#fff", borderRadius: 6, padding: "6px 8px 4px 7px",
                marginRight: 12, display: "flex", alignItems: "center", boxShadow: "0 0 3px #e5ebf8"
              }}>
                {/* Card icon */}
                <svg width="24" height="20" fill="none" viewBox="0 0 24 20"><rect width="24" height="14" y="3" fill="#2E7CF6" rx="2"/><rect width="24" height="14" y="3" fill="#fff" fillOpacity=".2" rx="2"/><rect width="24" height="14" y="3" stroke="#2E7CF6" strokeWidth="1.5" rx="2"/><rect width="10" height="2.5" x="7" y="9" fill="#2E7CF6" rx="1"/></svg>
              </span>
              <div>
                Credit/Debit Card
                <div style={{ color: "#8A94A6", fontWeight: 400, fontSize: 13, marginLeft: 0 }}>Visa, Mastercard, Maestro, Rupay</div>
              </div>
            </div>
            {/* Netbanking */}
            <div style={{
              fontWeight: 500,
              color: "#222",
              fontFamily: "Poppins, sans-serif",
              padding: "18px 20px 8px 38px",
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              borderBottom: "1px solid #E7EAF1",
              cursor: "pointer"
            }}>
              <span style={{
                marginRight: 12, display: "flex", alignItems: "center"
              }}>
                {/* Netbanking Icon */}
                <svg width="24" height="20" fill="none" viewBox="0 0 24 20"><rect width="24" height="14" y="3" fill="#E5EBF8" rx="2"/><rect width="24" height="14" y="3" fill="#fff" fillOpacity=".2" rx="2"/><rect width="24" height="14" y="3" stroke="#2E7CF6" strokeWidth="1.5" rx="2"/><rect x="7" y="8" width="10" height="4" fill="#2E7CF6" rx="1"/></svg>
              </span>
              <div>
                Netbanking
                <div style={{ color: "#8A94A6", fontWeight: 400, fontSize: 13, marginLeft: 0 }}>Pay with Internet Banking Account</div>
              </div>
            </div>
            {/* Wallet */}
            <div style={{
              fontWeight: 500,
              color: "#222",
              fontFamily: "Poppins, sans-serif",
              padding: "18px 20px 8px 38px",
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              borderBottom: "1px solid #E7EAF1",
              cursor: "pointer"
            }}>
              <span style={{
                marginRight: 12, display: "flex", alignItems: "center"
              }}>
                {/* Wallet icon */}
                <svg width="24" height="20" fill="none" viewBox="0 0 24 20"><rect width="24" height="14" y="3" fill="#E5EBF8" rx="2"/><rect width="24" height="14" y="3" fill="#fff" fillOpacity=".2" rx="2"/><rect width="24" height="14" y="3" stroke="#2E7CF6" strokeWidth="1.5" rx="2"/><rect x="11" y="8" width="2" height="4" fill="#2E7CF6" rx="1"/></svg>
              </span>
              <div>
                Wallet
                <div style={{ color: "#8A94A6", fontWeight: 400, fontSize: 13, marginLeft: 0 }}>Pay using a Wallet</div>
              </div>
            </div>
            {/* UPI */}
            <div style={{
              fontWeight: 500,
              color: "#222",
              fontFamily: "Poppins, sans-serif",
              padding: "18px 20px 8px 38px",
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              borderBottom: "1px solid #E7EAF1",
              cursor: "pointer"
            }}>
              <span style={{
                marginRight: 12, display: "flex", alignItems: "center"
              }}>
                {/* UPI icon */}
                <svg width="30" height="20" fill="none" viewBox="0 0 30 20"><rect width="30" height="14" y="3" fill="#E5EBF8" rx="2"/><rect width="30" height="14" y="3" fill="#fff" fillOpacity=".2" rx="2"/><rect width="30" height="14" y="3" stroke="#2E7CF6" strokeWidth="1.5" rx="2"/><rect x="8" y="8" width="14" height="4" fill="#2E7CF6" rx="1"/></svg>
              </span>
              <div>
                UPI
                <div style={{ color: "#8A94A6", fontWeight: 400, fontSize: 13, marginLeft: 0 }}>Pay using BHIM, Tez and other UPI apps</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Card payment form */}
        <div style={{
          flex: 1,
          background: "#fff",
          padding: "38px 38px 0 38px",
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}>
          <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: 15, color: "#888", marginBottom: 4 }}>
            Amount payable is
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px", fontFamily: "Poppins, sans-serif", color: "#000" }}>₹1,000</div>
          {/* Blue underline */}
          <div style={{ borderBottom: "3px solid #2E7CF6", width: 42, marginBottom: 18 }} />
          <div style={{ color: '#222', fontWeight: 600, fontFamily: "Poppins, sans-serif", fontSize: 17, marginBottom: 14 }}>
            Pay with Credit/Debit Card
          </div>
          <form onSubmit={handleSubmit} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <input
              type="text"
              placeholder="Card Number"
              maxLength={19}
              style={{
                color: '#000',
                width: "100%", height: 40, marginBottom: 12, borderRadius: 4,
                border: "1px solid #D1D5DB", padding: "0 12px", fontSize: 15, fontFamily: "Poppins, sans-serif"
              }}
            />
            <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
              <input
                type="text"
                placeholder="MM / YY"
                maxLength={5}
                style={{
                  color: '#000',
                  width: "48%", height: 40, borderRadius: 4,
                  border: "1px solid #D1D5DB", padding: "0 12px", fontSize: 15, fontFamily: "Poppins, sans-serif"
                }}
              />
              <input
                type="password"
                placeholder="CVV"
                maxLength={4}
                style={{
                  color: '#000',
                  width: "48%", height: 40, borderRadius: 4,
                  border: "1px solid #D1D5DB", padding: "0 12px", fontSize: 15, fontFamily: "Poppins, sans-serif"
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder's Name"
              style={{
                color: '#000',
                width: "100%", height: 40, marginBottom: 28, borderRadius: 4,
                border: "1px solid #D1D5DB", padding: "0 12px", fontSize: 15, fontFamily: "Poppins, sans-serif"
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                background: "#4091F7",
                border: "none",
                color: "#fff",
                height: 54,
                borderRadius: 5,
                fontSize: 18,
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
                marginBottom: 12,
                marginTop: "auto",
                boxShadow: "0px 4px 16px #2E7CF655"
              }}
            >
              PAY NOW
            </button>
          </form>
          <div style={{
            marginTop: 16, color: "#8A94A6", fontSize: 13,
            textAlign: "right", fontFamily: "Poppins, sans-serif"
          }}>
            Powered by <span style={{ fontWeight: 700, color: "#2E7CF6" }}>Razorpay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;