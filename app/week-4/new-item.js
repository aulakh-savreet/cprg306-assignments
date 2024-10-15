"use client";
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(prev => prev + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  return (
    <div className="space-y-2">
      <div>Quantity: {quantity}</div>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-4 py-2 border rounded-md">
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="px-4 py-2 border rounded-md">
        +
      </button>
    </div>
  );
}
