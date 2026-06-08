import { Link } from "react-router-dom";

function Freight() {
  return (
    <>
      {/* Hero */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-content">
          <h1>Freight Services</h1>
          <p>Road, sea and multimodal freight transportation solutions for local and global trade.</p>
        </div>
      </section>

      {/* Content */}
      <section className="service-content">
        <div className="container">
          <h2>Reliable Freight Transportation</h2>

          <p>
            Freight transportation is the backbone of global trade. At Rhenus Group. Ltd, 
            we provide comprehensive road, sea, and multimodal freight services tailored 
            to your cargo needs. Whether you require fast air freight for urgent shipments 
            or cost‑effective sea freight for large volumes, our experienced team ensures 
            safe, timely, and efficient delivery.
          </p>

          <p>
            <strong>Air Freight</strong> – Through our worldwide network of partners, you can 
            choose the service that best suits your timeline and budget. Whether your shipments 
            travel in commercial aircraft or require specialist freighter planes, we find 
            tailor‑made solutions for all your air freight needs.
          </p>

          <p>
            <strong>Sea Freight</strong> – We offer innovative sea freight clearing and 
            forwarding solutions to meet diverse client requirements. Constant attention to 
            expediting your sea freight is standard at our offices. We provide advice, 
            technical assistance, and supervision to guarantee safe delivery. We can ship 
            FCL (Full Container Load) or LCL (Less than Container Load) shipments anywhere 
            in the world – door to door.
          </p>

          <h3>Our Freight Services Include</h3>
          <ul>
            <li>Road Freight (local & cross‑border)</li>
            <li>Sea Freight (FCL & LCL worldwide)</li>
            <li>Air Freight (express & economy options)</li>
            <li>Container Transportation</li>
            <li>Bulk Cargo Handling</li>
            <li>Cross‑Border Transportation (East & Central Africa)</li>
            <li>Cargo Insurance Assistance</li>
            <li>Multimodal Logistics Coordination</li>
          </ul>

          <p>
            With strategic partnerships at Dar es Salaam, Tanga, and Mombasa ports, as well 
            as major airports, we ensure your freight moves seamlessly from origin to 
            destination. Our multimodal approach combines the best of road, sea, and air 
            to optimize cost, speed, and reliability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Need Freight Solutions?</h2>
        <p>Contact our freight experts for a competitive quote and reliable service.</p>
        <Link to="/contact" className="rh-btn-primary">Request a Quote →</Link>
      </section>
    </>
  );
}

export default Freight;