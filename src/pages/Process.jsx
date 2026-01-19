import { useTranslation } from '../hooks/useTranslation'
import AnimatedSection from '../components/AnimatedSection'
import './Process.css'

const Process = () => {
  const { t } = useTranslation()

  const steps = [
    { number: '01', key: 'step1' },
    { number: '02', key: 'step2' },
    { number: '03', key: 'step3' },
    { number: '04', key: 'step4' },
    { number: '05', key: 'step5' },
    { number: '06', key: 'step6' },
    { number: '07', key: 'step7' },
    { number: '08', key: 'step8' },
  ]

  return (
    <div className="process">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t.process.title}</h1>
          <p className="page-subtitle">
            {t.process.subtitle}
          </p>
        </div>
      </section>

      <section className="process-content">
        <div className="container">
          <AnimatedSection>
            <div className="process-intro">
              <p className="intro-text">
                {t.process.introText}
              </p>
            </div>
          </AnimatedSection>

          <div className="process-steps">
            {steps.map((step, index) => (
              <AnimatedSection key={step.key} delay={index * 100}>
                <div className="process-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h3 className="step-title">{t.process[step.key]}</h3>
                    <p className="step-description">{t.process[`${step.key}Desc`]}</p>
                  </div>
                  {index < steps.length - 1 && <div className="step-connector"></div>}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={800}>
            <div className="process-timeline">
              <h2 className="timeline-title">{t.process.timelineTitle}</h2>
              <div className="timeline-content">
                <div className="timeline-item">
                  <span className="timeline-phase">{t.process.preparationPhase}</span>
                  <span className="timeline-duration">{t.process.preparationDuration}</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-phase">{t.process.applicationPhase}</span>
                  <span className="timeline-duration">{t.process.applicationDuration}</span>
                </div>
                <div className="timeline-item">
                  <span className="timeline-phase">{t.process.relocationPhase}</span>
                  <span className="timeline-duration">{t.process.relocationDuration}</span>
                </div>
              </div>
              <p className="timeline-note">
                {t.process.timelineNote}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Process
