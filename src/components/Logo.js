import React from 'react';
import logo from '../assets/logo.png';

function Logo({ color, png }) {
  const defaultSvg = (
    <img 
      src={logo} 
      alt="Logo" 
      style={{ 
        width: '60px', 
        height: '60px', 
        marginRight: '8px',
        filter: `invert(${color === '#E6D5C3' ? '0' : '1'})`
      }} 
    />
  );

  return png || defaultSvg;
}

export default Logo; 