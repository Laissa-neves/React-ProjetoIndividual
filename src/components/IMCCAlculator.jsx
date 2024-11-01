import React, { useState } from 'react';

function IMCCalculator() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    // Certifica de que a altura está em metros para o cálculo correto do "IMC"
    const alturaEmMetros = altura / 100;

    // Verifica se altura e peso são números válidos
    if (peso && alturaEmMetros) {
      const imc = peso / (alturaEmMetros * alturaEmMetros);

      let classificacao = '';
      if (imc < 18.5) {
        classificacao = 'Baixo peso';
      } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Eutrofia (peso adequado)';
      } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau 1';
      } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau 2';
      } else if (imc >= 40) {
        classificacao = 'Obesidade extrema';
      }

      setResultado({ imc: imc.toFixed(2), classificacao });
    } else {
      alert("Por favor, insira valores válidos para peso e altura.");
    }
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px' 
      }}>

      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        style={{ margin: '10px' }}
      />
      <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        style={{ margin: '10px' }}
      />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {resultado && (
        <div style={{ marginTop: '20px' }}>
          
          <h2>Resultado</h2>
          <p>IMC: {resultado.imc}</p>
          <p>Classificação: {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculator;