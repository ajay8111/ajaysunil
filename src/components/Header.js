import React from 'react';
import myPhoto from '../assets/AjayPhoto.jpg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={myPhoto} alt="Ajay" />
      <h1>Ajay Sunil</h1>
    </header>
  );
};

export default Header;
