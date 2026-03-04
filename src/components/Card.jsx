import React from 'react';
import './Card.css';

const Card = ({ title, children }) => {
  return (
    <div className="card-component">
      <div className="card-content">
        {children}
      </div>
      {title && <div className="card-footer">{title}</div>}
    </div>
  );
};

export default Card;