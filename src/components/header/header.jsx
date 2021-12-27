import { useEffect, useRef, useState } from 'react';

import './header.scss';

const Header = ({ isMenuOpen }) => {
  const [rainCount] = useState(60);
  const [animationTiming] = useState(7);
  let header = useRef(null);
  useEffect(() => {
    for (let index = 0; index < rainCount; index++) {
      // creatign Element
      let i = document.createElement('i');

      //calculatins
      let sizeX = Math.random() * 5;
      let sizeY = Math.random() * 300;
      let delay = Math.random() * 20;
      let posX = Math.floor(Math.random() * window.innerWidth);

      //   adding style
      i.classList.add('rain');
      i.style.width = 0.2 + sizeX + `px`;
      i.style.height = 0.2 + sizeY + `px`;
      i.style.left = posX + `px`;
      i.style.animationDelay = delay + `s`;
      i.style.animationDuration = animationTiming + `s`;

      //set properties
      i.style.setProperty('--height', `-` + sizeY + `px`);

      header.current?.appendChild(i);
    }
  }, []);

  return (
    <header ref={header}>
      <div className="content-container">
        <div className={isMenuOpen ? 'display-none ' : 'content'}  data-scroll data-scroll-speed="3" data-scroll-position="top">
          <h1>DevOxygen</h1>
          <p>Develop by devoxogen</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
