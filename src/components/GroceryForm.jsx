import React from 'react';
import './GroceryForm.css';

function GroceryForm({ inputText, setInputText }) {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form>
      <div className="row">
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="e.g. milk"
        />
        <button type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default GroceryForm;