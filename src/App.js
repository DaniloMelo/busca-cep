import { useState } from 'react';
import './App.css';
import AddresInfo from './Components/AddressInfo'
import Form from './Components/Form'

function App() {

  const [data, setData] = useState()

  console.log(data)

  return (
    <div className="App">
      <h1> Busca CEP</h1>
      <Form getData={cep => setData(cep)}/>
      <AddresInfo />
    </div>
  );
}

export default App;
