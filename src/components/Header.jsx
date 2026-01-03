import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import logoImage from '../images/logo_rectangle.jpg'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logoImage} alt={t.companyName} className="logo-image" />
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.home}
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.about}
          </Link>
          <Link 
            to="/services" 
            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.services}
          </Link>
          <Link 
            to="/process" 
            className={`nav-link ${isActive('/process') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.process}
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.contact}
          </Link>
          <div className="nav-language-switcher">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
