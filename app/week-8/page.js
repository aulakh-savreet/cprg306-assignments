"use client"; 
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json'; 

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { ...newItem, id: Date.now().toString() }]);
  };

  function handleItemSelect(item) {
    let cleanName = item.name.split(',')[0]; 
    cleanName = cleanName.replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}]/gu, '').trim(); // Remove emojis
    setSelectedItemName(cleanName);
  }

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h1 className="text-3xl font-bold text-center my-6">Shopping List</h1> 
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 p-4">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </div>
  );
}
