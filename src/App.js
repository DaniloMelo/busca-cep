import { useState } from 'react';
import './App.css';
import Form from './Components/Form'

function App() {

  const [cep, setCep] = useState()
  console.log(`agora vai? ${cep}`)
  return (
    <div className="App">
      <h1> Busca CEP</h1>
      <Form getCep={cep => setCep(cep)}/>

    </div>
  );
}

export default App;
