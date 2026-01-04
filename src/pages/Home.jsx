import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import AnimatedSection from "../components/AnimatedSection";
import nurseImage from "../images/nurse3.jpg";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${nurseImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">{t.home.heroTitle}</h1>
            <p className="hero-subtitle">{t.home.heroSubtitle}</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                {t.home.getStarted}
              </Link>
              <Link to="/process" className="btn btn-secondary">
                {t.home.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">{t.home.whyChooseUs}</h2>
          </AnimatedSection>
          <div className="features-grid">
            <AnimatedSection delay={100}>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3 className="feature-title">
                  {t.home.internationalExpertise}
                </h3>
                <p className="feature-description">
                  {t.home.internationalExpertiseDesc}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h3 className="feature-title">{t.home.completeSupport}</h3>
                <p className="feature-description">
                  {t.home.completeSupportDesc}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3 className="feature-title">{t.home.trustedPartnerships}</h3>
                <p className="feature-description">
                  {t.home.trustedPartnershipsDesc}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="feature-card">
                <div className="feature-icon">🎓</div>
                <h3 className="feature-title">
                  {t.home.professionalDevelopment}
                </h3>
                <p className="feature-description">
                  {t.home.professionalDevelopmentDesc}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <AnimatedSection delay={100}>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">{t.home.nursesPlaced}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">{t.home.partnerHospitals}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="stat-item">
                <div className="stat-number">97%</div>
                <div className="stat-label">{t.home.successRate}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">{t.home.countries}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <AnimatedSection>
            <div className="cta-content">
              <h2 className="cta-title">{t.home.ctaTitle}</h2>
              <p className="cta-description">{t.home.ctaDescription}</p>
              <Link to="/contact" className="btn btn-primary btn-large">
                {t.home.contactUsToday}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
