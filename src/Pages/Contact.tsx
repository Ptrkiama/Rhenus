import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* Back Button */}
      <div style={{ padding: "20px 40px" }}>
        <Link to="/" className="rh-btn-primary">
          ← Back to Home
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="contact-banner">
        <img
          src="/images/contact-banner.jpg"
          alt="Contact Rhenus Group"
          className="contact-banner-img"
        />

        <div className="contact-banner-overlay">
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team for logistics, clearing,
            forwarding, freight and transport solutions.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">

          {/* Contact Form */}
          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

            <form>
              <input
                type="text"
                placeholder="Enter your name/company name"
              />

              <input
                type="email"
                placeholder="Enter your email"
              />

              <input
                type="tel"
                placeholder="Enter your phone"
              />

              <input
                type="text"
                placeholder="Enter your city/country"
              />

              <textarea
                rows={6}
                placeholder="Enter your message"
              ></textarea>

              <button
                type="submit"
                className="rh-btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="contact-info-card">
            <h2>Contact Address</h2>

            <p>
              Independent Ave./Customs Rd
              <br />
              Plot No. 53/KBII
              <br />
              P.O. Box 2284
              <br />
              Tanga, Tanzania
            </p>

            <div className="contact-item">
              <strong>Phone:</strong>
              <br />
              +255 27 2645667
            </div>

            <div className="contact-item">
              <strong>Mobile:</strong>
              <br />
              +255 715 013 114
            </div>

            <div className="contact-item">
              <strong>Fax:</strong>
              <br />
              +255 27 2645593
            </div>

            <div className="contact-item">
              <strong>Email:</strong>
              <br />
              info@rhenusgroup.co.tz
            </div>

            <div className="contact-item">
              <strong>Alternative Email:</strong>
              <br />
              rhenusgroup@yahoo.com
            </div>
          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="map-section">
        <h2>Find Us</h2>

        <iframe
          title="Rhenus Group Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1954413974254!2d39.10218257322229!3d-5.072048751479384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1843dbafffd4122d%3A0x7fde76d45ddc419!2sRays%20Cargo%20Trust%20Co.%20Ltd!5e0!3m2!1sen!2stz!4v1780731374348!5m2!1sen!2stz"
          className="contact-map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;