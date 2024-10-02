// week-3/item.js
export default function Item({ name, quantity, category }) {
    return (
        <li className="p-2 m-2 border rounded-md bg-gray-100">
            <span className="font-semibold">{name}</span> - {quantity} ({category})
        </li>
    );
}
