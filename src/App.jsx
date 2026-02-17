import React, { useState, useEffect } from 'react';
import './App.css';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editId, setEditId] = useState(null);

  // Load items from localStorage on initial render
  useEffect(() => {
    const savedItems = localStorage.getItem('groceryList');
    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems));
      } catch (e) {
        console.error('Error loading items:', e);
      }
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(items));
  }, [items]);

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

  const toggleCompleted = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    alert('Item Deleted Successfully!');
  };

  const startEditing = (id, name) => {
    setEditId(id);
    setInputText(name);
  };

  const updateItem = () => {
    if (!inputText.trim()) {
      alert('Item cannot be empty!');
      return;
    }

    setItems(items.map(item =>
      item.id === editId ? { ...item, name: inputText } : item
    ));
    
    setEditId(null);
    setInputText('');
    alert('Item Updated Successfully!');
  };

  const cancelEditing = () => {
    setEditId(null);
    setInputText('');
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
          editId={editId}
          updateItem={updateItem}
          cancelEditing={cancelEditing}
        />
        <GroceryList 
          items={items}
          toggleCompleted={toggleCompleted}
          deleteItem={deleteItem}
          startEditing={startEditing}
        />
      </div>
    </div>
  );
}

export default App;