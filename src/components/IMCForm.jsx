import React, { useState } from 'react';

function IMCForm({ onCalculate }) {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleAlturaChange = (e) => {
        let value = e.target.value;

        
        value = value.replace(/[^0-9,.]/g, '');

        value = value.replace(',', '.');

        if (value.length === 3 && !value.includes('.')) {
        value = value.slice(0, 1) + '.' + value.slice(1);
        }

        setAltura(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let alturaM = parseFloat(altura);
        if (alturaM > 10) {
        alturaM /= 100;
        }

        const pesoKg = parseFloat(peso);

        if (!isNaN(alturaM) && !isNaN(pesoKg)) {
        const imc = pesoKg / (alturaM * alturaM);
        onCalculate(imc);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Altura (m): </label>
            <input 
            type="text" 
            value={altura} 
            onChange={handleAlturaChange} 
            required 
            />
        </div>
        <div>
            <label>Peso (kg): </label>
            <input 
            type="number" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)} 
            required 
            />
        </div>
        <button type="submit">Calcular IMC</button>
        </form>
    );
}

export default IMCForm;
