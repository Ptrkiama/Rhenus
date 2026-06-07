// components/Navigation.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <>
      <nav className="rh-nav">
        <div className="rh-nav-container">
          <div className="rh-logo">
            <Link to="/">
              <img src="/images/rhenus-logo.png" alt="Rhenus Group" />
            </Link>
          </div>

         <div className="rh-nav-links">
  {navLinks.map((link) => (
    <Link key={link.to} to={link.to}>
      {link.label}
    </Link>
  ))}
</div>

          <div className="rh-nav-actions">
            <Link to="/contact" className="rh-btn-primary">
              Contact
            </Link>
            <button
              className="rh-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <i className="ti ti-menu-2"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`rh-mobile-overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`rh-mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="rh-close-btn" onClick={toggleMobileMenu}>
          <i className="ti ti-x"></i>
        </button>
        <div className="rh-mobile-menu-links">
  {navLinks.map((link) => (
    <Link key={link.to} to={link.to}>
      {link.label}
    </Link>
  ))}

  <Link to="/contact" className="rh-mobile-contact-btn">
    Contact
  </Link>
</div>
      </div>
    </>
  );
};

export default Navigation;