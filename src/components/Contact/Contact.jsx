import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-header">
        <p className="section-tag">CONTACT</p>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <h3>Email</h3>
            <p>
              pujithkalluru@gmail.com
            </p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>
              +91 8328221830
            </p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>
              Bangalore, India
            </p>
          </div>

          <div className="contact-card">
            <h3>LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/pujith-kumar-reddy-kalluru-41b635255/"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;