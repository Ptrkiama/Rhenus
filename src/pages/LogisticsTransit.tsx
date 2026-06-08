import { Link } from "react-router-dom";

function LogisticsTransit() {
  return (
    <>
      {/* Hero */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-content">
          <h1>Logistics & Transit</h1>
          <p>End‑to‑end logistics, warehousing, and transit solutions across East and Central Africa.</p>
        </div>
      </section>

      {/* Content */}
      <section className="service-content">
        <div className="container">
          <h2>Supply Chain & Transit Management</h2>

          <p>
            Rhenus Group. Ltd is one of the most preferred logistics service providers in 
            Tanzania, engaged in offering comprehensive transit and logistics solutions. 
            Beyond physical cargo movement, we provide value‑added services such as 
            logistics consultancy, route optimization, and supply chain design to help 
            our clients reduce costs and improve efficiency.
          </p>

          <p>
            <strong>Transit Cargo Management</strong> – When your cargo spends days or weeks 
            in transit across borders, you need a service provider with real‑time visibility 
            and competitive rates. Our transit bond capabilities allow smooth movement of 
            goods through Tanzania to landlocked countries (Rwanda, Burundi, Uganda, DRC, 
            South Sudan, Zambia). We handle all documentation, customs procedures at 
            entry/exit points, and coordination with multiple transport partners.
          </p>

          <p>
            <strong>Warehousing & Distribution</strong> – We offer secure warehousing 
            facilities with inventory management systems. Whether you need short‑term 
            storage or long‑term distribution hubs, our network ensures your products 
            are safe, organised, and ready for just‑in‑time delivery.
          </p>

          <p>
            <strong>End‑to‑End Visibility</strong> – Our advanced cargo tracking systems 
            provide real‑time updates on your shipments, from origin to final destination. 
            This transparency allows you to plan production, manage inventory, and respond 
            quickly to any delays or changes.
          </p>

          <h3>Our Logistics & Transit Services</h3>
          <ul>
            <li>Transit Cargo Management (Bonded & Non‑Bonded)</li>
            <li>Warehousing Solutions (Short & Long Term)</li>
            <li>Inventory Management & Stock Control</li>
            <li>Distribution Services (Last‑Mile Delivery)</li>
            <li>Real‑Time Cargo Tracking</li>
            <li>Supply Chain Coordination & Consultancy</li>
            <li>Cross‑Border Documentation & Customs Support</li>
            <li>Inter‑Modal Transit (Road/Rail/Sea)</li>
          </ul>

          <p>
            With strategic hubs in Tanga, Dar es Salaam, and key border points, we ensure 
            seamless transit of goods throughout East Africa and Central Africa. Our 
            experienced logistics team handles everything from import/export documentation 
            to final delivery, allowing you to focus on your core business.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Optimise Your Supply Chain</h2>
        <p>Partner with us for reliable logistics, warehousing, and transit solutions.</p>
        <Link to="/contact" className="rh-btn-primary">Request a Consultation →</Link>
      </section>
    </>
  );
}

export default LogisticsTransit;