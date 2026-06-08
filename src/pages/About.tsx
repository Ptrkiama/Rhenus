import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function About() {
  const currentYear = new Date().getFullYear();
  const foundedYear = 2005;
  const yearsInBusiness = currentYear - foundedYear;

  const heroTitle = "About RHENUS GROUP. Ltd";
  const heroDesc =
    "Trusted logistics, clearing, forwarding, freight and transport solutions across Tanzania and East Africa since 2005.";

  const whoWeAreTitle = "Professional Logistics Solutions Since 2005";
  const whoWeAreText1 =
    "Rhenus Group. Ltd was incorporated in Tanzania in 2005 as a Private Limited Liability Company. The company specializes in clearing and forwarding, freight services, transit operations and logistics solutions.";
  const whoWeAreText2 =
    "We hold a valid Customs Agent License and are active members of the Tanzania Freight Forwarders Association (TAFFA) and FIATA Worldwide. Our primary role is to facilitate cargo clearance from entry points and ensure timely delivery to customers throughout Tanzania, East Africa and Central Africa.";

  const missionTitle = "Delivering Cargo Efficiently and Reliably";
  const missionText =
    "To work closely with all sectors involved in logistics activities, including local and overseas clearing and forwarding agents, transport partners and stakeholders, ensuring cargo reaches our clients safely and in the shortest possible time through sea, road, and air freight services.";

  const visionTitle = "Supporting Tanzania's Economic Growth";
  const visionText =
    "To become a leading logistics and customs clearing company in East and Central Africa while supporting the Government of Tanzania through professional customs clearing and forwarding services that contribute to national development and industrial growth.";

  const statsData = [
    { id: "branches", value: 5, suffix: "", label: "Branches" },
    { id: "staff", value: 20, suffix: "+", label: "Professional Staff" },
    { id: "projects", value: 210, suffix: "+", label: "Logistics Projects" },
    { id: "years", value: yearsInBusiness, suffix: "+", label: "Years of Experience" },
  ];

  const whyUsItems = [
    "Licensed Customs Agent",
    "Member of TAFFA & FIATA",
    "Experienced Logistics Team",
    "East & Central Africa Coverage",
    "Fast Cargo Clearance",
    "Reliable Freight Solutions",
  ];

  // Simple number counter animation (optional)
  const useCounter = (targetValue, suffix, id) => {
    const ref = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              let start = 0;
              const end = targetValue;
              const duration = 1000;
              const stepTime = Math.abs(Math.floor(duration / end));
              const timer = setInterval(() => {
                start += 1;
                element.textContent = start + (suffix || "");
                if (start === end) clearInterval(timer);
              }, stepTime);
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.5 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [targetValue, suffix]);
    return ref;
  };

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-overlay">
          <div className="section-tag">About Us</div>
          <h1>{heroTitle}</h1>
          <p>{heroDesc}</p>
          <div className="hero-cta">
            <Link to="/contact" aria-label="Contact us to work together">
              <button className="rh-btn-white">Work With Us</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="container">
          <div className="section-tag">Who We Are</div>
          <h2>{whoWeAreTitle}</h2>
          <p>{whoWeAreText1}</p>
          <p>{whoWeAreText2}</p>
        </div>
      </section>

      {/* Statistics with counters */}
      <section className="about-stats">
        {statsData.map((stat, idx) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const counterRef = useCounter(stat.value, stat.suffix, stat.id);
          return (
            <div
              key={stat.id}
              className="stat-card animate-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3>
                <span ref={counterRef}>0</span>
                {stat.suffix && <span>{stat.suffix}</span>}
              </h3>
              <p>{stat.label}</p>
            </div>
          );
        })}
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="container">
          <div className="section-tag">Our Mission</div>
          <h2>{missionTitle}</h2>
          <p>{missionText}</p>
        </div>
      </section>

      {/* Vision */}
      <section className="about-section gray">
        <div className="container">
          <div className="section-tag">Our Vision</div>
          <h2>{visionTitle}</h2>
          <p>{visionText}</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="container">
          <h2>What Sets Us Apart</h2>
          <div className="why-grid">
            {whyUsItems.map((item) => (
              <div key={item} className="why-card">
                {item}
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "40px" }}>
            <Link to="/services" aria-label="View all our logistics services">
              <button className="rh-btn-outline">Explore Our Services →</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;