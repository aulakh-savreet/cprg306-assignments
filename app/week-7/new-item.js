"use client";

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    function increment() {
        if (quantity < 20) setQuantity(prev => prev + 1);
    }

    function decrement() {
        if (quantity > 1) setQuantity(prev => prev - 1);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const item = {
            id: Date.now().toString(),
            name,
            quantity,
            category
        };
        onAddItem(item);
        setName('');
        setQuantity(1);
        setCategory('produce');
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Enter item name"
                className="input input-bordered w-full max-w-xs"
            />
            <div>
                <button type="button" onClick={decrement} disabled={quantity === 1}>-</button>
                <span>{quantity}</span>
                <button type="button" onClick={increment} disabled={quantity === 20}>+</button>
            </div>
            <select value={category} onChange={e => setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            <button type="submit" className="btn btn-primary">Add Item</button>
        </form>
    );
}
