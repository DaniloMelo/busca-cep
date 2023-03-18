import { useState } from 'react';
import './App.css';
import AddressInfo from './Components/AddressInfo'
import Form from './Components/Form'

function App() {

  const [data, setData] = useState({})

  return (
    <div className="App">
      <h1> Busca CEP</h1>
      <Form getData={cep => setData({...cep})}/>
      <AddressInfo data={data}/>
    </div>
  );
}

export default App;
