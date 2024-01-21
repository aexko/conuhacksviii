// Logo.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../logo.webp'
import './css/Header.css'

const Header = () => {
    const navigate = useNavigate()

  return (
    <div className='logo'>
      <img onClick={() => navigate('/')} src={logoImage} style={{width:'150px', height:'auto', paddingTop:'2rem'}} alt="Logo" />
    </div>
  );
};

export default Header;