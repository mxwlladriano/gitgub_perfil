import React from 'react';

function IMCResult({ imc }) {
    const getClassification = () => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc < 34.9) return 'Obesidade Grau I';
        if (imc >= 35 && imc < 39.9) return 'Obesidade Grau II';
        if (imc >= 40) return 'Obesidade Grau III';
        return 'Inválido'; 
};

    return (
        <div>
            <h2>Seu IMC: {imc.toFixed(2)}</h2>
            <p>Classificação: {getClassification()}</p>
        </div>
    );
}

export default IMCResult;
