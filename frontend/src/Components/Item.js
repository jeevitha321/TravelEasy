export default function Item({ item, onDeleteItem, onToggleItem }) {

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        value={item.packed}
        onChange={() => onToggleItem(String(item.id), item)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(String(item.id))}>❌</button>
    </li>
  );
}
