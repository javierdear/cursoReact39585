import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClick = () => {
    onAdd(count);
  };

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleClick} disabled={stock === 0}>
        Agregar al carrito
      </button>
      {stock === 0 && <p>No hay stock disponible</p>}
    </div>
  );
}

export default ItemCount;
