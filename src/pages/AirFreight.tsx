import { Link } from "react-router-dom";

function AirFreight() {
  return (
    <>
      {/* Hero */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-content">
          <h1>Clearing and Forwarding</h1>
          <p>Fast, secure and reliable clearing and forwarding solutions for your cargo.</p>
        </div>
      </section>

      {/* Content */}
      <section className="service-content">
        <div className="container">
          <h2>Clearing & Forwarding Services in Tanzania</h2>
          <p>
            Looking for clearing and forwarding agents in Tanzania? You are at the right place! 
            Rhenus Group. Ltd has been a fully licensed customs clearing agent. We provide 
            high quality clearing and forwarding services to a number of industries within 
            Tanzania. Our solutions are cost effective, timely, and secure. We are a 
            customer-driven company that strives to deliver at international standards on 
            a local level.
          </p>
          <p>
            As leading customs clearing agents, we stay updated with the latest customs 
            regulations and procedures. We handle clearance of import and export consignments 
            by sea, air, and road more efficiently and easily. Our main services include 
            advising clients on document preparation, completing appraisement and examination 
            procedures, and processing payments.
          </p>

          <h3>Our Clearing & Forwarding Services Include</h3>
          <ul>
            <li>Import Clearance</li>
            <li>Export Clearance</li>
            <li>Customs Documentation</li>
            <li>Duty & Tax Processing</li>
            <li>Port Clearance</li>
            <li>Cargo Inspection Coordination</li>
            <li>Freight Forwarding Services</li>
            <li>Transit Bond Management</li>
          </ul>

          <p>
            With our expertise at Dar es Salaam, Tanga, and Mombasa ports, as well as 
            Kilimanjaro International Airport, we ensure your cargo moves swiftly through 
            customs. We also provide end-to-end logistics support, from documentation to 
            final delivery anywhere in Tanzania, East Africa, and Central Africa.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Need Clearing Assistance?</h2>
        <p>Let our experienced team handle your customs clearance and forwarding needs.</p>
        <Link to="/contact" className="rh-btn-primary">Request a Quote →</Link>
      </section>
    </>
  );
}

export default AirFreight;