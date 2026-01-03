import { useTranslation } from '../hooks/useTranslation'
import AnimatedSection from '../components/AnimatedSection'
import './Services.css'

const Services = () => {
  const { t } = useTranslation()

  const services = [
    { icon: '📝', key: 'recruitment' },
    { icon: '📄', key: 'documentation' },
    { icon: '🛂', key: 'visa' },
    { icon: '🗣️', key: 'language' },
    { icon: '🏥', key: 'placement' },
    { icon: '🏠', key: 'relocation' },
    { icon: '🤝', key: 'integration' },
    { icon: '📚', key: 'education' },
  ]

  return (
    <div className="services">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t.services.title}</h1>
          <p className="page-subtitle">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          {services.map((service, index) => (
            <AnimatedSection key={service.key} delay={index * 100}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h2 className="service-title">{t.services[service.key]}</h2>
                <p className="service-description">
                  {t.services[`${service.key}Desc`]}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
