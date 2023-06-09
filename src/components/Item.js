import React from "react";

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChangeCapture={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
