import './App.css';
import * as React from 'react';
import {MyForm} from './components/form/form';
import {CountryCard} from './components/cards/country-card';


function App() {
  const [datas, setDatas] = React.useState([])
  React.useEffect(() => {
    setDatas(JSON.parse(localStorage.getItem('objteste')))
  }, [])
  return (
    <div className="App">
     <h1>Projeto OPE</h1>
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
