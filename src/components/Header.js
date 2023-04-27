import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className="bg-white py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <a href="#">
          <img className="w-20" src={Logo} />
        </a>
        <button className="btn btn-sm">Work With Me</button>

      </div>
    </div>
  </header>;
};

export default Header;
