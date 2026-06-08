// Home.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const currentYear = new Date().getFullYear();
  const foundedYear = 2005;
  const yearsInBusiness = currentYear - foundedYear;

  const slides = [
    {
      image: "/images/hero1.jpg",
      title: "Transit Goods",
      desc: "RHENUS GROUP LIMITED is one of the most preferred logistics services providers engaged in offering Transit services. Our Transit Bond enables us to facilitate smooth transactions.",
    },
    {
      image: "/images/container-ship.jpg",
      title: "Sea Freight",
      desc: "Handling customs clearance at Dar es Salaam, Mombasa, and Tanga Ports, Dar, Kilimanjaro, and Kigali Airports, and other points of entry in Tanzania.",
    },
    {
      image: "/images/hero3.jpg",
      title: "Air Freight",
      desc: "Our cost-efficient air freight services will get your time-sensitive high value cargo to you on time without any risks involved.",
    },
  ];

  const statsData = [
    { num: "5", suffix: "", label: "Branches" },
    { num: yearsInBusiness.toString(), suffix: "+", label: "Years Experience" },
    { num: "24/7", suffix: "", label: "Operations Support" },
    { num: "100", suffix: "%", label: "Customer Commitment" },
  ];

  const servicesData = [
    {
      icon: "ti-truck",
      title: "Road Freight",
      desc: "Reliable transportation services across Tanzania and neighboring landlocked countries, ensuring safe and timely delivery.",
    },
    {
      icon: "ti-ship",
      title: "Sea Freight",
      desc: "Comprehensive ocean freight, clearing, and forwarding solutions for import and export cargo worldwide.",
    },
    {
      icon: "ti-plane",
      title: "Air Freight",
      desc: "Fast and secure air cargo services designed for time-sensitive shipments and global trade requirements.",
    },
    {
      icon: "ti-anchor",
      title: "Port Logistics",
      desc: "Efficient port handling, cargo management, and terminal operations for smooth supply chain movement.",
    },
    {
      icon: "ti-clock",
      title: "Fast Delivery",
      desc: "Quick, efficient, and dependable delivery services that keep your business moving without delays.",
    },
    {
      icon: "ti-phone",
      title: "24/7 Support",
      desc: "Our experienced team is always available to provide guidance, updates, and logistics solutions whenever you need them.",
    },
  ];

  const testimonialsData = [
    {
      rating: 5,
      text: "Thank you so much. Excellent service and reasonable price. In the future I will always use 'Rhenus Group. Ltd' and I will highly recommend you to all our associates.",
      author: "Mr. Moize Mazhar Yaman",
      role: "Euro Trucks",
    },
    {
      rating: 5,
      text: "Rhenus Group. Ltd has been able to demonstrate greater expertise in freight handling. Their knowledge of the Cargo Transportation business, the accuracy and efficiency of their services, coupled with affordable invoices, keep us coming back.",
      author: "",
      role: "",
    },
    {
      rating: 5,
      text: "We have worked with Rhenus Group. Ltd for several years and will continue to do so because of their personal attention to their clients. They work diligently on our behalf with all parties necessary to help us keep our shipments on track. We also appreciate their efficient manner of keeping us updated on our shipments.",
      author: "Pastor Kittoh",
      role: "Human Bridge",
    },
  ];

  const infiniteTestimonials = [...testimonialsData, ...testimonialsData];

  const partnerLogos = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
    "/images/client6.png",
  ];
  const infiniteLogos = [...partnerLogos, ...partnerLogos];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {/* Hero Section */}
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
          `,
        }}
        aria-label="Hero banner showing logistics services"
      >
        <div className="rh-hero-accent" aria-hidden="true"></div>
        <div className="rh-hero-overlay" aria-hidden="true"></div>
        <div className="rh-hero-content">
          <div className="rh-hero-eyebrow">Logistics Solutions</div>
          <h1 className="rh-hero-title">{slides[currentSlide].title}</h1>
          <p className="rh-hero-desc">{slides[currentSlide].desc}</p>
          <div className="rh-hero-btns">
            <Link to="/services">
              <button className="rh-btn-white" aria-label="View our services">
                Our Services
              </button>
            </Link>
            <Link to="/contact">
              <button className="rh-btn-outline" aria-label="Get in touch with us">
                Get in Touch
              </button>
            </Link>
          </div>
          <div className="rh-slider-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={index === currentSlide ? "rh-dot active" : "rh-dot"}
                onClick={() => setCurrentSlide(index)}
                onKeyDown={(e) => e.key === "Enter" && setCurrentSlide(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="rh-stats">
        {statsData.map((stat, idx) => (
          <div className="rh-stat" key={idx}>
            <div className="rh-stat-num">
              {stat.num}
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <div className="rh-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="rh-section">
        <div className="rh-section-tag">What We Do</div>
        <div className="rh-section-title">End-to-End Logistics Services</div>
        <p className="rh-section-sub">
          From air freight to port logistics, we deliver integrated solutions
          tailored to your industry's unique demands.
        </p>

        <div className="rh-services">
          {servicesData.map((service, idx) => (
            <div className="rh-service-card" key={idx}>
              <div className="rh-service-icon">
                <i className={`ti ${service.icon}`} aria-hidden="true"></i>
              </div>
              <div className="rh-service-title">{service.title}</div>
              <div className="rh-service-desc">{service.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slogan Section – fixed duplicate and styling */}
      <div className="rh-industries">
        <div className="rh-section-tag">Our Slogan</div>
        <div className="slogan-card">
          <i className="ti ti-clock-hour-4 slogan-icon" aria-hidden="true"></i>
          <h2 className="slogan-title">Timely Logistics Fulfilment</h2>
          <p className="slogan-text">
            Delivering cargo safely, efficiently, and on schedule — every
            shipment, every destination, every time.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="rh-testimonials">
        <div className="rh-section-tag">Client Testimonials</div>
        <div className="rh-section-title">What Our Clients Say</div>
        <p className="rh-section-sub">
          Trusted by businesses across Tanzania and beyond for reliable
          logistics, clearing, forwarding, and transportation services.
        </p>

        <div className="rh-testimonial-slider">
          <div className="rh-testimonial-track">
            {infiniteTestimonials.map((testimonial, idx) => (
              <div className="rh-testimonial-card" key={idx}>
                <div className="rh-stars" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="rh-testimonial-text">{testimonial.text}</p>
                <div className="rh-testimonial-author">
                  <div>
                    <h4>{testimonial.author || "Anonymous"}</h4>
                    <span>{testimonial.role || "Client"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="rh-partners">
        <div className="rh-section-tag">Trusted Network</div>
        <div className="rh-section-title">Our Partners & Clients</div>
        <p className="rh-section-sub">
          Trusted by leading organizations across logistics, manufacturing,
          retail, technology, and global trade.
        </p>

        <div className="rh-logo-slider">
          <div className="rh-logo-track">
            {infiniteLogos.map((logo, idx) => (
              <div className="rh-logo-item" key={idx}>
                <img src={logo} alt={`Partner logo ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;