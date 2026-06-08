import { Link } from "react-router-dom";

const services = [
  {
    title: "Clearing & Forwarding",
    icon: "📄",
    description:
      "Fast and reliable clearing and forwarding solutions for urgent shipments across local and international destinations. Licensed customs agents handling all documentation.",
    link: "/services/air-freight",
  },
  {
    title: "Freight Services",
    icon: "🚛",
    description:
      "Road, sea, and multimodal freight services designed to move your cargo safely and efficiently. FCL and LCL shipments anywhere in the world.",
    link: "/services/freight",
  },
  {
    title: "Logistics & Transit",
    icon: "📦",
    description:
      "End-to-end logistics management and transit services throughout East and Central Africa, including warehousing, inventory management and distribution.",
    link: "/services/logistics-transit",
  },
  {
    title: "Project Logistics",
    icon: "⚙️",
    description:
      "Professional handling of oversized and heavy cargo with specialized equipment and experienced experts for complex transport projects.",
    link: "/services/clearing-forwarding",
  },
];

function Services() {
  return (
    <>
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-content">
          <div className="section-tag">What We Offer</div>
          <h1>Our Services</h1>
          <p>
            Comprehensive logistics, freight, transit and customs
            clearing solutions designed to keep your business moving.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="services-intro">
        <div className="container">
          <h2>Professional Logistics Solutions</h2>
          <p>
            We provide reliable and efficient logistics services across
            Tanzania, East Africa and Central Africa. Our experienced team
            ensures your cargo reaches its destination safely and on time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-page">
        {services.map((service) => (
          <div key={service.title} className="service-page-card">
            <div className="service-page-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to={service.link} className="rh-btn-primary" aria-label={`Learn more about ${service.title}`}>
              Learn More →
            </Link>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Need Logistics Support?</h2>
        <p>
          Contact our team today for customized freight, transit and
          customs clearing solutions.
        </p>
        <Link to="/contact" className="rh-btn-primary" aria-label="Contact our support team">
          Contact Us
        </Link>
      </section>
    </>
  );
}

export default Services;