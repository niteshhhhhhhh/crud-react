import React from 'react';
import './App.css';
import GroceryForm from './components/GroceryForm';

function App() {
  return (
    <div className="container">
      <div className="grocery-bud">
        <h2>
          Grocery Bud 
          <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="grocery icon" />
        </h2>
        <GroceryForm />
      </div>
    </div>
  );
}

export default App;