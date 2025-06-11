import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.crtdFooter}>
      <div className={styles.crtdFooter__container}>
        {/* Company Info */}
        <div>
          <div className={styles.crtdFooter__brand}>
            <img
              src="/crtdLogo.png"
              alt="CRTD Technologies Logo"
              className={styles.crtdFooter__logo}
            />
            <h3 className={styles.crtdFooter__companyName}>CRTD Technologies</h3>
          </div>
          <p className={styles.crtdFooter__description}>
            Connecting fresh talent with leading tech companies. Your gateway to a successful tech career.
          </p>
          <div className={styles.crtdFooter__contactInfo}>
            <div className={styles.crtdFooter__contactItem}>
              <FaEnvelope className={styles.crtdFooter__contactIcon} />
              contact@crtdtech.com
            </div>
            <div className={styles.crtdFooter__contactItem}>
              <FaPhone className={styles.crtdFooter__contactIcon} />
              +91 98765 43210
            </div>
            <div className={styles.crtdFooter__contactItem}>
              <FaMapMarkerAlt className={styles.crtdFooter__contactIcon} />
              Bangalore, India
            </div>
          </div>
        </div>

        {/* Quick Links & Services */}
        <div className={styles.crtdFooter__linksContainer}>
          <div className={styles.crtdFooter__linksGroup}>
            <h4 className={styles.crtdFooter__linksTitle}>Quick Links</h4>
            <ul className={styles.crtdFooter__linksList}>
              <li><a href="/" className={styles.crtdFooter__link}>→ Home</a></li>
              <li><a href="/fresher-jobs" className={styles.crtdFooter__link}>→ Fresher Jobs</a></li>
              <li><a href="/services" className={styles.crtdFooter__link}>→ Services</a></li>
              <li><a href="/pricing" className={styles.crtdFooter__link}>→ Pricing</a></li>
              <li><a href="/contact" className={styles.crtdFooter__link}>→ Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.crtdFooter__linksGroup}>
            <h4 className={styles.crtdFooter__linksTitle}>Our Services</h4>
            <ul className={styles.crtdFooter__linksList}>
              <li><a href="/campus-recruitment" className={styles.crtdFooter__link}>→ Campus Recruitment</a></li>
              <li><a href="/bulk-hiring" className={styles.crtdFooter__link}>→ Bulk Hiring</a></li>
              <li><a href="/career-guidance" className={styles.crtdFooter__link}>→ Career Guidance</a></li>
              <li><a href="/skill-development" className={styles.crtdFooter__link}>→ Skill Development</a></li>
              <li><a href="/job-placement" className={styles.crtdFooter__link}>→ Job Placement</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className={styles.crtdFooter__newsletterTitle}>Stay Updated</h4>
          <p className={styles.crtdFooter__newsletterText}>
            Subscribe to our newsletter for the latest job opportunities and career tips.
          </p>
          <form className={styles.crtdFooter__newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.crtdFooter__newsletterInput}
              required
            />
            <button
              type="submit"
              className={styles.crtdFooter__newsletterButton}
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.crtdFooter__bottom}>
        <p className={styles.crtdFooter__copyright}>© 2025 CRTD Technologies. All rights reserved.</p>
        <div className={styles.crtdFooter__socialLinks}>
          <a href="#" className={styles.crtdFooter__socialLink}><FaFacebookF /></a>
          <a href="#" className={styles.crtdFooter__socialLink}><FaTwitter /></a>
          <a href="#" className={styles.crtdFooter__socialLink}><FaLinkedinIn /></a>
          <a href="#" className={styles.crtdFooter__socialLink}><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;