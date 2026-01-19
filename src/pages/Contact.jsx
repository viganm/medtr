import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { useLocation } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { countryCodes } from "../data/countryCodes";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+90"); // Default to Turkey
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (location.search.includes("success=true")) {
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setCountryCode("+90"); // Reset to default
      // Clear the URL parameter
      window.history.replaceState({}, "", location.pathname);
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // FormSubmit will handle the submission
    // The form will submit naturally to FormSubmit service
  };

  return (
    <div className="contact">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t.contact.title}</h1>
          <p className="page-subtitle">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection>
              <div className="contact-info">
                <h2 className="info-title">{t.contact.getInTouch}</h2>
                <p className="info-description">{t.contact.getInTouchDesc}</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-detail">
                      <h3 className="detail-label">{t.contact.email}</h3>
                      <a
                        href="mailto:deutscheemed@gmail.com"
                        className="detail-value"
                      >
                        deutscheemed@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div className="contact-detail">
                      <h3 className="detail-label">{t.contact.phone}</h3>
                      <a href="tel:+905010488703" className="detail-value">
                        +90 (0) 501 048 87 03
                      </a>
                      <a href="tel:+4917674557659" className="detail-value">
                        +49 (0) 176 74557659
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-detail">
                      <h3 className="detail-label">{t.contact.address}</h3>
                      <p className="detail-value">
                        Büyükşehir Mah.No 10 Beylikdüzü İstanbul
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">🕒</div>
                    <div className="contact-detail">
                      <h3 className="detail-label">{t.contact.officeHours}</h3>
                      <p className="detail-value">
                        {t.contact.officeHoursText
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                t.contact.officeHoursText.split("\n").length -
                                  1 && <br />}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="contact-form-container">
                <h2 className="form-title">{t.contact.sendMessage}</h2>
                {showSuccess && (
                  <div className="form-success-message">
                    {t.contact.successMessage}
                  </div>
                )}
                <form
                  className="contact-form"
                  action="https://formsubmit.co/deutscheemed@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  {/* FormSubmit configuration */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Form Submission - MEDTR.DE"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value={`${window.location.origin}/contact?success=true`}
                  />
                  <input type="hidden" name="_template" value="box" />

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {t.contact.emailAddress}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      {t.contact.phoneNumber}
                    </label>
                    <div className="phone-input-wrapper">
                      <select
                        className="country-code-select"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      >
                        {countryCodes.map((country, index) => {
                          // Pad code to 6 characters for alignment (longest is "+1-809")
                          const maxCodeLength = 6;
                          const codeLength = country.code.length;
                          const paddingLength = Math.max(
                            0,
                            maxCodeLength - codeLength
                          );
                          const padding = "\u00A0".repeat(paddingLength); // Non-breaking spaces
                          return (
                            <option key={index} value={country.code}>
                              {country.flag} {country.code}
                              {padding} {country.country}
                            </option>
                          );
                        })}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input phone-input"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="123 456 7890"
                      />
                    </div>
                    <input
                      type="hidden"
                      name="phone_full"
                      value={`${countryCode} ${formData.phone}`}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-large btn-submit"
                  >
                    {t.contact.send}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
