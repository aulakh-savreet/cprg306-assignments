"use client";

import { useState } from 'react';
import Item from './item';

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = items.slice().sort((a, b) => { 
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <button onClick={() => setSortBy('name')} className={sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}>Sort by Name</button>
      <button onClick={() => setSortBy('category')} className={sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}>Sort by Category</button>
      {sortedItems.map(item => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </div>
  );
}

export default ItemList;
