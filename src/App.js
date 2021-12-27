import Header from './components/header/header';
import Menu from './components/menu/menu';
import Nav from './components/nav/nav';

import { useState } from 'react';

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(true);
  return (
    <div>
      <Nav isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
      <Header isMenuOpen={isMenuOpen}  />
    </div>
  );
}

export default App;
