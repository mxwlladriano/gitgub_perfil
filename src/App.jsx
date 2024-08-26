import React, { useState } from 'react';
import IMCForm from './components/IMCForm.jsx';
import IMCResult from './components/IMCResult.jsx';
import './App.css';

function App() {
  const [imc, setImc] = useState(null);

  const handleCalculate = (calculatedImc) => {
    setImc(calculatedImc);
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <IMCForm onCalculate={handleCalculate} />
      {imc !== null && <IMCResult imc={imc} />}
    </div>
  );
}

export default App;

