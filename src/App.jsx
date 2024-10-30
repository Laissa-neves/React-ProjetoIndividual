import React from 'react';
import IMCCalculator from './components/IMCCAlculator';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <IMCCalculator />
      <Footer />
    </>
  );
}

export default App;