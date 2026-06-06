import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Clearing & Forwading",
      icon: "📄",
      description:
        "Fast and reliable clearing and forwarding solutions for urgent shipments across local and international destinations.",
      link: "/services/air-freight"
    },
    {
      title: "Freight",
      icon: "🚛",
      description:
        "Road, sea, and multimodal freight services designed to move your cargo safely and efficiently.",
      link: "/services/freight"
    },
    {
      title: "Logistics & Transit",
      icon: "📦",
      description:
        "End-to-end logistics management and transit services throughout East and Central Africa.",
      link: "/services/logistics-transit"
    },
    {
      title: "Project Logistics",
      icon: "✈️",
      description:
        "Rhenus Group. Ltd offer solutions for professional handling of oversized and heavy cargo. This coupled with all the necessary equipment and experts to handle the most complex road haulage projects make our company the partner of choice for our clients.",
      link: "/services/clearing-forwarding"
    }
  ];

  return (
    <>
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Reliable logistics solutions tailored to your business needs.</p>
      </section>

      <section className="services-page">
        {services.map((service, index) => (
          <div key={index} className="service-page-card">
            <div className="service-page-icon">
              {service.icon}
            </div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <Link
              to={service.link}
              className="rh-btn-primary"
              style={{
                display: "inline-block",
                marginTop: "20px"
              }}
            >
              Learn More
            </Link>
          </div>
        ))}
      </section>

      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <Link to="/" className="rh-btn-primary">
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default Services;