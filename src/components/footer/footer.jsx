import Logo from '../../asset/images/logo.svg';
import { Link } from 'react-router-dom';
import './footer.scss';
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src={Logo} alt={Logo} />
        </div>

        <div className="footer-grid">
          <div className="footer-grid-content">
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="/">Managment</Link>
              </li>
              <li>
                <Link to="/">Partnershiip</Link>
              </li>
              <li>
                <Link to="/">Business</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
            </ul>
          </div>
          <div className="footer-grid-content">
            <h2>Support</h2>
            <ul>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Faq</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
