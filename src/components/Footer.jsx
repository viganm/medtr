import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <p className="footer-description">{t.footer.description}</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{t.footer.quickLinks}</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/about">{t.nav.about}</Link>
              </li>
              <li>
                <Link to="/services">{t.nav.services}</Link>
              </li>
              <li>
                <Link to="/process">{t.nav.process}</Link>
              </li>
              <li>
                <Link to="/contact">{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{t.footer.contact}</h4>
            <ul className="footer-contact">
              <li>Email: info@medtr.de</li>
              <li>Phone: +90 (0) 546 567 32 16</li>
              <li>Address: Turkey</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {t.companyName}.{" "}
            {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
