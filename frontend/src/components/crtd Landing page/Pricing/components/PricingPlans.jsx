import React from "react";
import "../styles/PricingPlans.css";
import planIcon from '../../../../assets/Images/Frame.png';

const plans = [
  {
    title: "Standard Fresher Recruitment",
    price: "₹30,000 – ₹50,000",
    type: "per hire",
    features: [
      "Job Description Creation & Branding",
      "Resume Sourcing & First-Round Screening",
      "Candidate Shortlisting & Coordination",
      "Interview Setup with Hiring Teams",
      "1-Free Replacement within 30 days"
    ],
    buttonText: "Get Started",
    highlight: false
  },
  {
    title: "Bulk Fresher Hiring",
    price: "₹10,000 – ₹30,000",
    type: "per hire",
    features: [
      "Mass Outreach & JD Promotions",
      "Resume Screening & Telephonic Rounds",
      "Centralized Drive/Event Planning",
      "Offer Management & Follow-ups",
      "Dedicated Account Manager",
      "Real-Time Hiring Dashboards"
    ],
    buttonText: "Get Started",
    highlight: true
  },
  {
    title: "End-to-End Fresher Hiring",
    price: "₹35,000",
    type: "per month",
    features: [
      "Full-Time Dedicated Recruiter",
      "Branding, Sourcing, Screening, Interviews",
      "Offer Rollouts & Onboarding Coordination",
      "Campus Drive Support (Virtual or Onsite)",
      "Live Tracking & Weekly Reporting",
      "Custom plans for 10+ Hires/month"
    ],
    buttonText: "Get Started",
    highlight: false
  },
  {
    title: "On-Payroll Fresher Hiring",
    price: "₹10,000",
    type: "per hire",
    features: [
      "Background Verification & Documentation",
      "PF/ESI/Gratuity Setup Assistance",
      "Offer Letter Drafting & Joining Management",
      "Onboarding Consultation & Guidance",
      "Optional ₹1,000/month per employee for HR support"
    ],
    buttonText: "Get Started",
    highlight: false
  },
  {
    title: "Third-Party Payroll for Freshers",
    price: "₹8,000 – ₹10,000",
    type: "per employee/month",
    features: [
      "Monthly Payroll Processing",
      "Statutory Compliance (PF, ESI, TDS, etc.)",
      "Payslips, Tax filings, and Form-16",
      "Attendance & Leave tracking",
      "Exit & Final Settlement Services",
      "Dedicated Payroll Account Manager"
    ],
    buttonText: "Get Started",
    highlight: false
  }
];

const PricingPlans = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="section-title">Transparent Pricing Plans</h2>
        <p className="section-subtitle">
          Whether you're looking for one hire or one hundred, we provide structured solutions<br />
          tailored to your hiring needs
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}
          >
            {plan.highlight && <div className="popular-tag">Most Popular</div>}

            <div className="card-top">
              <div className="card-icon">
                <img src={planIcon} alt="Plan icon" />
              </div>
              <h3 className="plan-title">{plan.title}</h3>
              <div className="price-wrapper">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">/{plan.type}</span>
              </div>
            </div>

            <div className="card-features">
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`plan-button ${plan.highlight ? 'highlight-button' : ''}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-footer">
        <p className="footer-text">
          Not sure which plan fits your needs? Contact us for a customized solution.
        </p>
        <button className="cta-button">Get Custom Quote</button>
      </div>
    </section>
  );
};

export default PricingPlans;