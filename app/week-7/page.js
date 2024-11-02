"use client"; 
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json'; 

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { ...newItem, id: Date.now().toString() }]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Shopping List</h1> 
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
