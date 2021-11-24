import React from 'react';
import './country-card.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  // Legend
);

export const CountryCard = ({data}) => {
  const infs = {
    labels: [
      'income_costs_idx',
	    'educational_idx',
	    'safety_idx',
	    'employment_idx',
	    'hdi_idx',
	    'GDP_per_capita_idx',
	    'purchasing_power_idx',
	    'equality_idx',
	    'health_quality_idx'
    ],
    datasets: [{
      label: 'indices normalizados',
      backgroundColor:'rgba(0,255,0,1)',
      borderColor:'black',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,255,0,0.2)',
      hoverBorderColor: '#FF0000',
      data: [
        data.income_costs_idx,
	      data.educational_idx,
	      data.safety_idx,
	      data.employment_idx,
	      data.hdi_idx,
	      data.GDP_per_capita_idx,
	      data.purchasing_power_idx,
	      data.equality_idx,
	      data.health_quality_idx
      ]
    }]
  };
  const options = {
    maintainAspectRadio: false,
    responsive: true
  } 
  
  return (
  <div id="recomendation-card" className="promotion-card">
    
    <div className="promotion-card__info">
      <h1 className="promotion-card__title">{data.country}</h1>
    </div>
    <div>
      <Bar data={infs} options={options}/>
    </div>
  </div>
  )
};

