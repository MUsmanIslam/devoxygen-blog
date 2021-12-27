import './side.scss';
import Logo from '../../asset/images/logo.svg';
const Nav = ({ isMenuOpen, setisMenuOpen }) => {
  return (
    <div className="side-nav">
      <nav className="nav">
        <img src={Logo} alt="" className="logo" />
        <div
          className={isMenuOpen ? 'humber-gur active' : 'humber-gur'}
          onClick={() => setisMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <a href="/github">
              <box-icon type="logo" name="github"></box-icon>
            </a>
          </li>
          <li>
            <a href="/github">
              <box-icon name="linkedin" type="logo"></box-icon>
            </a>
          </li>
          <li>
            <a href="/github">
              <box-icon name="stack-overflow" type="logo"></box-icon>
            </a>
          </li>
          <li>
            <a href="/github">
              <box-icon name="dribbble" type="logo"></box-icon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
