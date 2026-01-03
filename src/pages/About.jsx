import { useTranslation } from '../hooks/useTranslation'
import AnimatedSection from '../components/AnimatedSection'
import './About.css'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="about">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t.about.title}</h1>
          <p className="page-subtitle">
            {t.about.subtitle}
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <AnimatedSection>
            <div className="about-section">
              <h2 className="section-heading">{t.about.mission}</h2>
              <p className="section-text">
                {t.about.missionText}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="about-section">
              <h2 className="section-heading">{t.about.whoWeAre}</h2>
              <p className="section-text">
                {t.about.whoWeAreText}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="about-section">
              <h2 className="section-heading">{t.about.ourValues}</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3 className="value-title">{t.about.integrity}</h3>
                  <p className="value-description">
                    {t.about.integrityDesc}
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="value-title">{t.about.excellence}</h3>
                  <p className="value-description">
                    {t.about.excellenceDesc}
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="value-title">{t.about.compassion}</h3>
                  <p className="value-description">
                    {t.about.compassionDesc}
                  </p>
                </div>
                <div className="value-item">
                  <h3 className="value-title">{t.about.partnership}</h3>
                  <p className="value-description">
                    {t.about.partnershipDesc}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="about-section">
              <h2 className="section-heading">{t.about.whyGermany}</h2>
              <p className="section-text">
                {t.about.whyGermanyText}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default About
