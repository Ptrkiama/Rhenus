import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-overlay">
          <div className="section-tag">About Us</div>
          <h1>About RHENUS GROUP. Ltd</h1>
          <p>
            Trusted logistics, clearing, forwarding, freight and transport
            solutions across Tanzania and East Africa since 2005.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="container">
          <div className="section-tag">Who We Are</div>

          <h2>Professional Logistics Solutions Since 2005</h2>

          <p>
            Rhenus Group. Ltd was incorporated in Tanzania in 2005 as a
            Private Limited Liability Company. The company specializes in
            clearing and forwarding, freight services, transit operations and
            logistics solutions.
          </p>

          <p>
            We hold a valid Customs Agent License and are active members of the
            Tanzania Freight Forwarders Association (TAFFA) and FIATA Worldwide.
            Our primary role is to facilitate cargo clearance from entry points
            and ensure timely delivery to customers throughout Tanzania, East
            Africa and Central Africa.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="about-stats">
        {[
          { num: "5", label: "Branches" },
          { num: "20+", label: "Professional Staff" },
          { num: "210+", label: "Logistics Projects" },
          { num: "2005", label: "Founded" },
        ].map((stat, i) => (
          <div
            key={i}
            className="stat-card animate-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <h3>{stat.num}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="container">
          <div className="section-tag">Our Mission</div>

          <h2>Delivering Cargo Efficiently and Reliably</h2>

          <p>
            To work closely with all sectors involved in logistics activities,
            including local and overseas clearing and forwarding agents,
            transport partners and stakeholders, ensuring cargo reaches our
            clients safely and in the shortest possible time through sea, road,
            and air freight services.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="about-section gray">
        <div className="container">
          <div className="section-tag">Our Vision</div>

          <h2>Supporting Tanzania's Economic Growth</h2>

          <p>
            To become a leading logistics and customs clearing company in East
            and Central Africa while supporting the Government of Tanzania
            through professional customs clearing and forwarding services that
            contribute to national development and industrial growth.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="container">

          <h2>What Sets Us Apart</h2>

          <div className="why-grid">
            {[
              "Licensed Customs Agent",
              "Member of TAFFA & FIATA",
              "Experienced Logistics Team",
              "East & Central Africa Coverage",
              "Fast Cargo Clearance",
              "Reliable Freight Solutions",
            ].map((item, i) => (
              <div
                key={i}
                className="why-card animate-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;