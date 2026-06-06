import { Link } from "react-router-dom";

function AirFreight() {
  return (
    <>
      <section className="about-hero">
        <div className="about-overlay">
          <h1>Clearing and Forwarding</h1>
          <p>Fast, secure and reliable clearing and forwarding solutions.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>Clearing & Forwarding</h2>

          <p>
            
Looking for clearing and forwarding agents in Tanzania?? Then your are at the right place! Rhenus Group. Ltd has been a fully licensed customs clearing agent. We provide high quality clearing and forwarding services to a number of industries within Tanzania. Our solutions are cost effective, timely, and secure. We are a customer driven company that strive to deliver at international standards on a local level

 

Customs agent
we are leading custom clearing Agents with updated customs regulations and procedres procedures we handle clearance of import and export consignments by sea, air and road more efficiently and easily. Our main services in custom clearing services include advice to the clients in preparing documents related to import and export, completion of appeasement and examination procedures and payments.
          </p>

          <h3>Services Include</h3>
          <ul>
            <li>Import Clearance</li>
            <li>Export Clearance</li>
            <li>Customs Documentation</li>
            <li>Duty & Tax Processing</li>
            <li>Port Clearance</li>
            <li>Cargo Inspection Coordination</li>
            <li>Freight Forwarding Services</li>
          </ul>

          {/* Back Button */}
      <div style={{ padding: "20px 40px" }}>
        <Link to="/" className="rh-btn-primary">
         Back to Home
        </Link>
      </div>
        </div>
      </section>
    </>
  );
}

export default AirFreight;