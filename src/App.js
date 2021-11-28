import './App.css';
import * as React from 'react';
import {MyForm} from './components/form/form';
import {CountryCard} from './components/cards/country-card';


function App() {
  const [datas, setDatas] = React.useState([])
  React.useEffect(() => {
    setDatas(JSON.parse(localStorage.getItem('datasCountries')))
  }, [])
  return (
    <div className="App">
      <div className="div-menu">
      <h1>Encontre seu lugar no mundo</h1>
      </div>
     <MyForm/> 
     <div style={{margin: '30px auto'}}>
        {datas.map((data)=>(
           <CountryCard data={data}/>
        ))}
      </div>
        
    </div>
  );
}

export default App;
