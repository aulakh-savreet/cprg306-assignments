function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="text-lg my-2 cursor-pointer"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <h4 className="font-bold">{name}</h4>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
}

export default Item;
