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
      'Renda após o custo de vida',
	    'Educação',
	    'Segurança',
	    'Empregabilidade',
	    'IDH',
	    'PIB per capita',
	    'Poder de compra',
	    'Equidade Social',
	    'Saúde'
    ],
    datasets: [{
      label: 'Pontuação',
      backgroundColor:'#1976d2',
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
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: data.country,
      },
    }
  };
  
  return (
  <div id="recomendation-card" className="recomendation-card">
    
    <div className="card-rank-number">
      <h2>Rank</h2>
      <h1>{data.rank}</h1>
    </div>

    <div className="card-graph">
      <Bar data={infs} options={options}/>
    </div>

    <div className="card-extras">
      <h3>{data.country}</h3>
      <p>Temperatura média {data.average_celsius}°C</p>
      <p>Renda média U${data.average_monthly_income}</p>
      <p>Custo de vida médio U${data.cost_of_living}</p>
      <p>Taxa de residentes estrangeiros {data.foreign_resident_tax}%</p>
    </div>

  </div>
  )
};

