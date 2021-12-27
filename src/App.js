import Header from './components/header/header';
import Menu from './components/menu/menu';
import Nav from './components/nav/nav';
import LocomotiveScroll from 'locomotive-scroll';
import { useState, useRef, useEffect } from 'react';
import Footer from './components/footer/footer';

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const appRef = useRef(null);

  useEffect(() => {
    new LocomotiveScroll({
      el: appRef.current,
      smooth: true,
    });
  }, []);
  return (
    <div className="devoxgen-app">
      <Nav isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      <div className="header" ref={appRef}>
        <Header isMenuOpen={isMenuOpen} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
