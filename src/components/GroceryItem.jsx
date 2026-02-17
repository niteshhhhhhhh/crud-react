import React from 'react';
import './GroceryItem.css';

function GroceryItem({ item, toggleCompleted, deleteItem }) {
  const { id, name, completed } = item;

  return (
    <li 
      className={`grocery-item ${completed ? 'checked' : ''}`}
      onClick={() => toggleCompleted(id)}
    >
      <span className="item-text">{name}</span>
      
      <div className="item-buttons">
        <span 
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteItem(id);
          }}
          title="Delete item"
        >
          ×
        </span>
      </div>
    </li>
  );
}

export default GroceryItem;