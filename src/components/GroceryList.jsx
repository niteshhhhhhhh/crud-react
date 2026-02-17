import React from 'react';
import GroceryItem from './GroceryItem';
import './GroceryList.css';

function GroceryList({ items, deleteItem }) {
  if (items.length === 0) {
    return <p className="empty-message">No items in your list. Add something!</p>;
  }

  return (
    <ul className="list-container">
      {items.map(item => (
        <GroceryItem 
          key={item.id}
          item={item}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}

export default GroceryList;