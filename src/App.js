import './App.css';
import * as React from 'react';
import {MyForm} from './components/form/form';
import {CountryCard} from './components/cards/country-card';


function App() {
  const [data, setData] = React.useState({})
  React.useEffect(() => {
    setData(JSON.parse(localStorage.getItem('objteste')))
  }, [])
  return (
    <div className="App">
     <h1>Projeto OPE</h1>
     <MyForm/>     
     <CountryCard data={data}/>
    </div>
  );
}

export default App;
