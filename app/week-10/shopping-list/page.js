"use client";
import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    const userItems = await getItems(user.uid);
    console.log('Loaded items:', userItems);
    setItems(userItems);
  };

  const handleAddItem = async (newItem) => {
    const newItemWithId = await addItem(user.uid, newItem);
    setItems((prevItems) => [...prevItems, newItemWithId]);
  };

  function handleItemSelect(item) {
    console.log('Selected item:', item);
    if (!item || !item.name) {
      console.error('Invalid item selected:', item);
      return;
    }
    let cleanName = item.name.split(',')[0];
    cleanName = cleanName
      .replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}]/gu, '')
      .trim();
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
