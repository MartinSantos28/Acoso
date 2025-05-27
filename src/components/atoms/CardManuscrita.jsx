import React from 'react';
import './CardManuscrita.css';

const CardManuscrita = ({ mensaje, style, delay = 0 }) => {
  return (
    <div className="card-manuscrita" style={{ ...style, animationDelay: `${delay}s` }}>
      {mensaje}
    </div>
  );
};

export default CardManuscrita; 