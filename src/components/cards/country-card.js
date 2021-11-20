import React from 'react';
import './country-card.css';

export const CountryCard = ({data}) => (
  <div id="recomendation-card" className="promotion-card">
    
    <div className="promotion-card__info">
      <h1 className="promotion-card__title">{data.country}</h1>
      
    </div>
  </div>
);

