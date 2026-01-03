import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './AnimatedSection.css'

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`animated-section ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
