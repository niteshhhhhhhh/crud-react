import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="grocery-bud">
        <h2>
          Grocery Bud 
          <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="grocery icon" />
        </h2>
        <p className="coming-soon">Grocery Bud App </p>
      </div>
    </div>
  );
}

export default App;