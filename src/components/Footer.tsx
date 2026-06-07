// components/Footer.tsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rh-footer">
      <div className="rh-footer-grid">
        <div className="rh-footer-brand">
          <div className="rh-footer-logo">
            <div className="rh-logo-mark">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              </svg>
            </div>
            <span>RHENUS GROUP</span>
          </div>
          <p>
            Specialist in: Customs Agent, Freight and Logistics. Trusted
            logistics partner across Tanzania and East Africa since 2005.
          </p>
        </div>
        <div className="rh-footer-col">
          <div className="rh-footer-col-title">Services</div>
          <Link to="/services/air-freight">Clearing & Forwarding</Link>
          <Link to="/services/freight">Freight</Link>
          <Link to="/services/logistics-transit">Logistics & Transit</Link>
          <Link to="/services/clearing-forwarding">Project Logistics</Link>
        </div>
        <div className="rh-footer-col">
          <div className="rh-footer-col-title">Company</div>
          <Link to="/about">About Rhenus</Link>
          <a href="#">Careers</a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rh-footer-bottom">
        <div className="rh-footer-copy">
          ©2026 RHENUS GROUP. All rights reserved.
        </div>
        <div className="rh-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Imprint</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;