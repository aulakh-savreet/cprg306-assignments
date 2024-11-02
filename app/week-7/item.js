function Item({ name, quantity, category }) {
  return (
    <div className="text-lg my-2">
      <h4 className="font-bold">{name}</h4>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
}

export default Item;
