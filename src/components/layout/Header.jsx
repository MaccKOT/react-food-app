import React from 'react';

const Header = () => {
  return (
    <nav className='green darken-2'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          Fortnite Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://github.com/MaccKOT/react-food-app'>Github Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
