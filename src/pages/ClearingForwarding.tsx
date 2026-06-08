import { Link } from "react-router-dom";

function ClearingForwarding() {
  return (
    <>
      {/* Hero */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-content">
          <h1>Project Logistics</h1>
          <p>Professional handling of oversized, heavy, and complex cargo for industrial and infrastructure projects.</p>
        </div>
      </section>

      {/* Content */}
      <section className="service-content">
        <div className="container">
          <h2>Project Logistics Specialists</h2>

          <p>
            At Rhenus Group. Ltd, our project logistics team offers specialized solutions 
            for the professional handling of oversized and heavy cargo. We combine the 
            necessary equipment and seasoned experts to manage the most complex road 
            haulage projects, making us the partner of choice for clients across Tanzania, 
            East Africa, and beyond.
          </p>

          <p>
            <strong>Core Capabilities:</strong> Transportation of odd and over‑dimensional 
            cargo to project sites within Tanzania, East Africa, and overseas destinations. 
            We ensure that equipment is duly returned to the principal when required – this 
            forms the core of our project cargo handling expertise. Moving project cargo 
            demands special equipment and handling methods, as it does not fit within 
            standard measurements or shipping methods.
          </p>

          <p>
            <strong>Route Optimization & Cost Efficiency:</strong> Our extensive experience 
            enables us to identify the most cost‑effective route for your project cargo. 
            We help clients ensure timely delivery of their equipment while maintaining 
            its security throughout transit.
          </p>

          <p>
            <strong>Inter‑Modal & Customs Support:</strong> Depending on cargo and route 
            requirements, our scope of services extends to inter‑modal solutions 
            (road, rail, sea, air), as well as full customs clearance and reporting 
            capabilities. This gives us a competitive edge – incomplete or incorrect 
            customs documentation can cause considerable delays and added costs to the 
            delivery process, reducing supply chain reliability. Our team handles all 
            documentation accurately and efficiently.
          </p>

          <h3>Project Logistics Services Include</h3>
          <ul>
            <li>Oversized & Heavy Cargo Transport</li>
            <li>Over‑Dimensional Cargo (ODC) Handling</li>
            <li>Specialized Equipment & Trailers</li>
            <li>Route Survey & Risk Assessment</li>
            <li>Inter‑Modal Logistics Coordination</li>
            <li>Customs Clearance for Project Cargo</li>
            <li>On‑Site Delivery & Positioning</li>
            <li>Return Logistics for Equipment</li>
          </ul>

          <p>
            From industrial machinery to construction equipment, power generation components 
            to mining hardware – our project logistics team has the expertise to move it 
            safely, efficiently, and on schedule. We work closely with project managers, 
            engineers, and site supervisors to ensure seamless integration with your 
            project timeline.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Planning a Complex Project?</h2>
        <p>Let our project logistics specialists handle your heavy and oversized cargo needs.</p>
        <Link to="/contact" className="rh-btn-primary">Discuss Your Project →</Link>
      </section>
    </>
  );
}

export default ClearingForwarding;