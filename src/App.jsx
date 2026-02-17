import React, { useState } from 'react';
import './App.css';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const addItem = (itemName) => {
    if (!itemName.trim()) {
      alert('You must write something!');
      return;
    }

    const newItem = {
      id: generateId(),
      name: itemName,
      completed: false
    };

    setItems([...items, newItem]);
    setInputText('');
    alert('Item Added Successfully!');
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    alert('Item Deleted Successfully!');
  };

  return (
    <div className="container">
      <div className="grocery-bud">
        <h2>
          Grocery Bud 
          <img src={`${process.env.PUBLIC_URL}/images/icon.png`} alt="grocery icon" />
        </h2>
        <GroceryForm 
          inputText={inputText}
          setInputText={setInputText}
          addItem={addItem}
        />
        <GroceryList 
          items={items}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default App;