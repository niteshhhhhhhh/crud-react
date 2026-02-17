import React from 'react';
import './GroceryForm.css';

function GroceryForm() {
  return (
    <form>
      <div className="row">
        <input
          type="text"
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