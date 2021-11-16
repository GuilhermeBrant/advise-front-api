import React, { useState } from 'react';
import {WeightSlider} from '../inputs/WeightSlider';
import axios from 'axios';
import './form.css'

const initialValue = {
    inequalityWeight: 5,
    costOfLifeWeight: 5,
    educationalWeight: 5,
    safetyWeight: 5,
    employmentWeight: 5,
    hdiWeight: 5,
    gdpPerCapitaWeight: 5,
    purchasingPowerWeight: 5,
    healthQualityWeight: 5
  }
  
export const MyForm = () => {
    const [values, setValues] = useState(initialValue);
  
    function onChange(ev) {
      const { name, value } = ev.target;
  
      setValues({ ...values, [name]: value });
    }
    
    function onSubmit(ev) {
      ev.preventDefault();
  
      axios({
        method: 'post',
        url: 'http://localhost:5000/recommendation',
        data: values
      }).then((response) => {
        console.log(response.data)
      })
    }
  
    return (
      <div className="form-div">  
        <form onSubmit={onSubmit}>
          <div className="form__group">
            <label htmlFor="inequalityWeight">Paridade Social</label>
            <WeightSlider name="inequalityWeight" onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="costOfLifeWeight">Custo de Vida</label>
            <WeightSlider name="costOfLifeWeight" onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="educationalWeight">Educação</label>
            <WeightSlider name="educationalWeight" onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="safetyWeight">Segurança</label>
            <WeightSlider name="safetyWeight" onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="employmentWeight">Empregabilidade</label>
            <WeightSlider name="employmentWeight" onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="hdiWeight">IDH</label>
            <WeightSlider name="hdiWeight" onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="gdpPerCapitaWeight">PIB per capita</label>
            <WeightSlider name="gdpPerCapitaWeight" onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="purchasingPowerWeight">Poder de compra</label>
            <WeightSlider name="purchasingPowerWeight" onChange={onChange} />
          </div>
          <div className="form__group">
            <label htmlFor="healthQualityWeight">Saúde</label>
            <WeightSlider name="healthQualityWeight" onChange={onChange} />
          </div>
          <div>
            <button type="submit">Encontrar</button>
          </div>
        </form>
      </div>
    )
  };
  
