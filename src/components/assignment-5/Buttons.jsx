'use client';

import React from 'react';

export default function Button({ 
  type = 'primary',        
  onClick,                 
  children,                
  style = {}              
}) {
  
 
  const baseStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: 5,
    fontSize: 16,
    cursor: 'pointer',
    color: 'white',
    margin: '5px',
    ...getStyle(type),     
    ...style            
  };

  
  function getStyle(type) {
    switch (type) {
      case 'primary':
        return { backgroundColor: '#0070f3' }; 
      case 'secondary':
        return { backgroundColor: '#666' };    
      case 'danger':
        return { backgroundColor: '#e00' };    
      default:
        return { backgroundColor: '#0070f3' }; 
    }
  }

  return (
    <button style={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
}
