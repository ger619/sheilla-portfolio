import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className="bg-pink-300" py-8>
    <div className="container mx-auto">
      <a href="#">
         <img src={Logo} />
      </a>

    </div>
  </header>;
};

export default Header;
