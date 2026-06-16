import { useState } from "react";
import "./Contact.css";
import useScrollReveal from "../../hooks/useScrollReveal";

/* ── Scroll reveal wrapper ── */
function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : "translateY(30px)",
        transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Contact info items ── */
const CONTACT_ITEMS = [
  {
    icon: "✉️",
    label: "Email",
    value: "pujithkalluru@gmail.com",
    href: "mailto:pujithkalluru@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 8328221830",
    href: "tel:+918328221830",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "pujith-kumar-reddy-kalluru",
    href: "https://www.linkedin.com/in/pujith-kumar-reddy-kalluru-41b635255/",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "PUJITHKUMARREDDY",
    href: "https://github.com/PUJITHKUMARREDDY",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Nandyal, Andhra Pradesh, India",
    href: null,
  },
];

/* ── Controlled input ── */
function FormField({ label, id, placeholder, value, onChange, required }) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label}
        {required && <span className="required"> *</span>}
      </label>
      <input
        id={id}
        type={id === "email" ? "email" : "text"}
        className="form-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}

/* ── Main component ── */
export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [feedback, setFeedback] = useState({ type: "", text: "" });
  const [loading, setLoading]   = useState(false);

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback({ type: "error", text: "⚠ Please fill in Name, Email, and Message." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setFeedback({ type: "error", text: "⚠ Please enter a valid email address." });
      return;
    }
    setLoading(true);
    setFeedback({ type: "", text: "" });

    /* Simulate send — replace with EmailJS / formspree / your API */
    setTimeout(() => {
      setLoading(false);
      setFeedback({ type: "success", text: "✓ Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFeedback({ type: "", text: "" }), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        {/* ── Header ── */}
        <Reveal>
          <p className="contact-eyebrow">get in touch</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="contact-title">
            Let's <span className="grad">Connect</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="contact-subtitle">
            Open to internship opportunities, collaborations, and conversations
            about tech and AI. Drop me a message!
          </p>
        </Reveal>

        {/* ── Grid ── */}
        <div className="contact-grid">

          {/* LEFT — info */}
          <Reveal delay={0.15}>
            <div className="contact-info">
              <div className="contact-info-intro">
                <h3>Let's Chat 👋</h3>
                <p>
                  Whether you have a question, want to start a project, or simply
                  want to connect — feel free to reach out.
                </p>
                <p>
                  I'm always open to discussing new opportunities and interesting ideas.
                </p>
              </div>

              {CONTACT_ITEMS.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="contact-item"
                  >
                    <div className="contact-item-icon">{item.icon}</div>
                    <div className="contact-item-text">
                      <span className="contact-item-label">{item.label}</span>
                      <span className="contact-item-value">{item.value}</span>
                    </div>
                    <span className="contact-item-arrow">→</span>
                  </a>
                ) : (
                  <div key={item.label} className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div className="contact-item-text">
                      <span className="contact-item-label">{item.label}</span>
                      <span className="contact-item-value">{item.value}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </Reveal>

          {/* RIGHT — form */}
          <Reveal delay={0.2}>
            <div className="contact-form-card">
              <h3 className="form-card-title">Send Message</h3>
              <p className="form-card-note">* Required fields</p>

              {/* Name + Email row */}
              <div className="form-row">
                <FormField
                  id="name"
                  label="Your Name"
                  placeholder="Pujith Kumar"
                  value={form.name}
                  onChange={set("name")}
                  required
                />
                <FormField
                  id="email"
                  label="Email Address"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                  required
                />
              </div>

              {/* Subject */}
              <FormField
                id="subject"
                label="Subject"
                placeholder="Internship / Collaboration / Just saying hi!"
                value={form.subject}
                onChange={set("subject")}
              />

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Tell me about your project, opportunity, or what's on your mind..."
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  rows={5}
                />
              </div>

              {/* Feedback */}
              {feedback.text && (
                <div className={`form-feedback ${feedback.type}`}>
                  {feedback.text}
                </div>
              )}

              {/* Submit */}
              <button
                className={`form-submit-btn ${loading ? "loading" : ""}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span style={{
                      width: 16, height: 16, border: "2px solid rgba(10,15,30,0.3)",
                      borderTopColor: "#0a0f1e", borderRadius: "50%",
                      animation: "spin-slow 0.8s linear infinite",
                      display: "inline-block",
                    }} />
                    Sending…
                  </>
                ) : (
                  <>Send Message →</>
                )}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}