import React from 'react';
import './GroceryList.css';

function GroceryList({ items }) {
  if (items.length === 0) {
    return <p className="empty-message">No items in your list. Add something!</p>;
  }

  return (
    <ul className="list-container">
      {items.map(item => (
        <li key={item.id} className="grocery-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default GroceryList;