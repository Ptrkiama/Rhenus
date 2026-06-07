// Home.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Transit Goods",
    desc: "Rhenus Group. Ltd is the one of the most preferred logistics services providers engaged in offering Transit services.Our Transit Bond enable us to facilitate the smooth transaction."
  },
  {
    image: "/images/container-ship.jpg",
    title: "Sea Freight",
    desc: "Handling customs clearance at Dar es salaam, Mombasa, and Tanga Ports, Dar, Kilimanjaro, and Kigali Airports, and other points of entry in Tanzania."
  },
  {
    image: "/images/hero3.jpg",
    title: "Air Freight",
    desc: "Our cost-efficient air freight services will get your time-sensitive high value cargo to you on time without any risks involved"
  },
];

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(timer);
}, []);
  return (
    <>
  <div
  className="rh-hero"
  style={{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(0,52,122,.92) 0%,
        rgba(0,52,122,.90) 35%,
        rgba(0,52,122,.45) 60%,
        rgba(0,52,122,.05) 100%
      ),
      url(${slides[currentSlide].image})
    `
  }}
>
        <div className="rh-hero-accent"></div>
        <div className="rh-hero-overlay"></div>
        <div className="rh-hero-content">
          <div className="rh-hero-eyebrow">Logistics Solutions</div>
          <h1 className="rh-hero-title">
  {slides[currentSlide].title}
</h1>

<p className="rh-hero-desc">
  {slides[currentSlide].desc}
</p>
          <div className="rh-hero-btns">
            <Link to="/services">
  <button className="rh-btn-white">
    Our Services
  </button>
</Link>
            <Link to="/contact">
  <button className="rh-btn-outline">
    Get in Touch
  </button>
</Link>
          </div>
          <div className="rh-slider-dots">
  {slides.map((_, index) => (
    <span
      key={index}
      className={
        index === currentSlide
          ? "rh-dot active"
          : "rh-dot"
      }
      onClick={() => setCurrentSlide(index)}
    />
  ))}
</div>
        </div>
      </div>

       {/* <div className="rh-stats">
        <div className="rh-stat">
        <div className="rh-stat-num">5</div>
          <div className="rh-stat-label">Branches</div>
        </div>
        <div className="rh-stat">
          <div className="rh-stat-num">60<span>+</span></div>
          <div className="rh-stat-label">Countries</div>
        </div>
        <div className="rh-stat">
          <div className="rh-stat-num">5.5B<span>€</span></div>
          <div className="rh-stat-label">Annual revenue</div>
        </div>
        
      </div>*/}

      <div className="rh-section">
  <div className="rh-section-tag">What We Do</div>
  <div className="rh-section-title">End-to-End Logistics Services</div>
  <p className="rh-section-sub">
    From air freight to port logistics, we deliver integrated solutions tailored to your industry's unique demands.
  </p>

  <div className="rh-services">
    <div className="rh-service-card">
      <div className="rh-service-icon">
        <i className="ti ti-truck" aria-hidden="true"></i>
      </div>
      <div className="rh-service-title">Road Freight</div>
      <div className="rh-service-desc">
        Reliable transportation services across Tanzania and neighboring landlocked countries, ensuring safe and timely delivery.
      </div>
    </div>

    <div className="rh-service-card">
      <div className="rh-service-icon">
        <i className="ti ti-ship" aria-hidden="true"></i>
      </div>
      <div className="rh-service-title">Sea Freight</div>
      <div className="rh-service-desc">
        Comprehensive ocean freight, clearing, and forwarding solutions for import and export cargo worldwide.
      </div>
    </div>

    <div className="rh-service-card">
      <div className="rh-service-icon">
        <i className="ti ti-plane" aria-hidden="true"></i>
      </div>
      <div className="rh-service-title">Air Freight</div>
      <div className="rh-service-desc">
        Fast and secure air cargo services designed for time-sensitive shipments and global trade requirements.
      </div>
    </div>

    <div className="rh-service-card">
      <div className="rh-service-icon">
        <i className="ti ti-anchor" aria-hidden="true"></i>
      </div>
      <div className="rh-service-title">Port Logistics</div>
      <div className="rh-service-desc">
        Efficient port handling, cargo management, and terminal operations for smooth supply chain movement.
      </div>
    </div>

    <div className="rh-service-card">
      <div className="rh-service-icon">
        <i className="ti ti-clock" aria-hidden="true"></i>
      </div>
      <div className="rh-service-title">Fast Delivery</div>
      <div className="rh-service-desc">
        Quick, efficient, and dependable delivery services that keep your business moving without delays.
      </div>
    </div>

    <div className="rh-service-card">
      <div className="rh-service-icon">
        <i className="ti ti-phone" aria-hidden="true"></i>
      </div>
      <div className="rh-service-title">24/7 Support</div>
      <div className="rh-service-desc">
        Our experienced team is always available to provide guidance, updates, and logistics solutions whenever you need them.
      </div>
    </div>
  </div>
</div>

      {/* Our Slogan */}
      <div className="rh-industries">
        <div className="rh-section-tag">Our Slogan</div>
        <div style={{
          marginTop: "50px",
          background: "#ffffff",
          borderRadius: "12px",
          padding: "60px",
          textAlign: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
        }}>
          <i
            className="ti ti-clock-hour-4"
            style={{
              fontSize: "80px",
              color: "#003f7f"
            }}
          ></i>

          <h2 style={{
            marginTop: "20px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "48px",
            color: "#003f7f",
            fontWeight: 700
          }}>
            Timely Logistics Fulfilment
          </h2>

          <p style={{
            marginTop: "20px",
            fontSize: "48px",
            color: "#003f7f",
            fontWeight: 700
          }}>
            Delivering cargo safely, efficiently, and on schedule —
            every shipment, every destination, every time.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="rh-testimonials">
        <div className="rh-section-tag">Client Testimonials</div>
        <div className="rh-section-title">What Our Clients Say</div>
        <p className="rh-section-sub">
          Trusted by businesses across Tanzania and beyond for reliable logistics,
          clearing, forwarding, and transportation services.
        </p>

        <div className="rh-testimonial-slider">
          <div className="rh-testimonial-track">
            {/* Testimonial 1 */}
            <div className="rh-testimonial-card">
              <div className="rh-stars">★★★★★</div>
              <p className="rh-testimonial-text">
                thanks you so much. Excellent service and reasonable price. in the future i will always use "Rhenus Group. Ltd" and i will highly recomend you to all our associates.
              </p>
              <div className="rh-testimonial-author">
                <div>
                  <h4>Mr. Moize Mazhar Yaman</h4>
                  <span>Euro Trucks</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rh-testimonial-card">
              <div className="rh-stars">★★★★★</div>
              <p className="rh-testimonial-text">
                "Rhenus Group. Ltd has been able to demonstrate greater expertise in freight handling. Their knowledge of the Cargo Transportation business, the accuracy and efficiently of their services, coupled with affordable Invoices, keep us coming back."
              </p>
              <div className="rh-testimonial-author">
                <div>
                  <h4></h4>
                  <span></span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rh-testimonial-card">
              <div className="rh-stars">★★★★★</div>
              <p className="rh-testimonial-text">
                "We have worked with Rhenus Group. Ltd for several years and will continue to do so because of their personal attention to their clients. They work diligently on our behalf with all parties necessary to help us keep our shipments on track. We also appreciate their efficient manner of keeping us updated on our shipments."
              </p>
              <div className="rh-testimonial-author">
                <div>
                  <h4>Pastor. kittoh</h4>
                  <span>Human bridge</span>
                </div>
              </div>
            </div>

            {/* Duplicate for infinite loop */}
            <div className="rh-testimonial-card">
              <div className="rh-stars">★★★★★</div>
              <p className="rh-testimonial-text">
                thanks you so much. Excellent service and reasonable price. in the future i will always use "Rhenus Group. Ltd" and i will highly recomend you to all our associates.
              </p>
              <div className="rh-testimonial-author">
                <div>
                  <h4>Mr. Moize Mazhar Yaman</h4>
                  <span>Euro Trucks</span>
                </div>
              </div>
            </div>

            <div className="rh-testimonial-card">
              <div className="rh-stars">★★★★★</div>
              <p className="rh-testimonial-text">
                "Rhenus Group. Ltd has been able to demonstrate greater expertise in freight handling. Their knowledge of the Cargo Transportation business, the accuracy and efficiently of their services, coupled with affordable Invoices, keep us coming back."
              </p>
              <div className="rh-testimonial-author">
                <div>
                  <h4></h4>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="rh-testimonial-card">
              <div className="rh-stars">★★★★★</div>
              <p className="rh-testimonial-text">
                "We have worked with Rhenus Group. Ltd for several years and will continue to do so because of their personal attention to their clients. They work diligently on our behalf with all parties necessary to help us keep our shipments on track. We also appreciate their efficient manner of keeping us updated on our shipments."
              </p>
              <div className="rh-testimonial-author">
                <div>
                  <h4>Pastor. kittoh</h4>
                  <span>Human bridge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners & Clients */}
      <div className="rh-partners">
        <div className="rh-section-tag">Trusted Network</div>
        <div className="rh-section-title">Our Partners & Clients</div>
        <p className="rh-section-sub">
          Trusted by leading organizations across logistics, manufacturing,
          retail, technology, and global trade.
        </p>

        <div className="rh-logo-slider">
          <div className="rh-logo-track">
            {/* First Set */}
            <div className="rh-logo-item"><img src="/images/client1.png" alt="Client 1" /></div>
            <div className="rh-logo-item"><img src="/images/client2.png" alt="Client 2" /></div>
            <div className="rh-logo-item"><img src="/images/client3.png" alt="Client 3" /></div>
            <div className="rh-logo-item"><img src="/images/client4.png" alt="Client 4" /></div>
            <div className="rh-logo-item"><img src="/images/client5.png" alt="Client 5" /></div>
            <div className="rh-logo-item"><img src="/images/client6.png" alt="Client 6" /></div>

            {/* Duplicate Set for Infinite Loop */}
            <div className="rh-logo-item"><img src="/images/client1.png" alt="Client 1" /></div>
            <div className="rh-logo-item"><img src="/images/client2.png" alt="Client 2" /></div>
            <div className="rh-logo-item"><img src="/images/client3.png" alt="Client 3" /></div>
            <div className="rh-logo-item"><img src="/images/client4.png" alt="Client 4" /></div>
            <div className="rh-logo-item"><img src="/images/client5.png" alt="Client 5" /></div>
            <div className="rh-logo-item"><img src="/images/client6.png" alt="Client 6" /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;