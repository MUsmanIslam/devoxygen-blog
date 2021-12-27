import { Link } from 'react-router-dom';

import './menu.scss';
const Menu = ({ isMenuOpen, setisMenuOpen }) => {
  return (
    <div
      className={isMenuOpen ? 'menu-container display-block' : 'display-none'}
    >
      <div className="menu">
        <Link
          className="menu-item"
          to="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
        >
          <div className="menu-item-container">
            <span>Project</span>
            <div className="menu-content">
              <h1 className="menu-title">PROJECTS</h1>
              <p className="menu-subtitle">View All Project</p>
              <p className="menu-body-content">
                Lorem Ipsum is simply dummy <br /> text of the printing and
                typesetting
              </p>
            </div>
          </div>
          <box-icon name="cuboid"></box-icon>
        </Link>
        <Link
          className="menu-item"
          to="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
        >
          <div className="menu-item-container">
            <span>Project</span>
            <div className="menu-content">
              <h1 className="menu-title">Service</h1>
              <p className="menu-subtitle">View All Service</p>
              <p className="menu-body-content">
                Lorem Ipsum is simply dummy <br /> text of the printing and
                typesetting
              </p>
            </div>
          </div>
          <box-icon name="shape-square"></box-icon>
        </Link>
        <Link
          className="menu-item"
          to="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
        >
          <div className="menu-item-container">
            <span>Project</span>
            <div className="menu-content">
              <h1 className="menu-title">Clients</h1>
              <p className="menu-subtitle">View All Clients</p>
              <p className="menu-body-content">
                Lorem Ipsum is simply dummy <br /> text of the printing and
                typesetting
              </p>
            </div>
          </div>
          <box-icon name="user"></box-icon>
        </Link>
        <Link
          className="menu-item"
          to="/"
          onClick={() => setisMenuOpen(!isMenuOpen)}
        >
          <div className="menu-item-container">
            <span>Project</span>
            <div className="menu-content">
              <h1 className="menu-title">Contact</h1>
              <p className="menu-subtitle">Contact</p>
              <p className="menu-body-content">
                Lorem Ipsum is simply dummy <br /> text of the printing and
                typesetting
              </p>
            </div>
          </div>
          <box-icon name="chat"></box-icon>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
