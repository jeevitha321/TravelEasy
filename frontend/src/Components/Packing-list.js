import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  Items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortStatus, setSortStatus] = useState("input");
  let sortedLists;

  if (sortStatus === "input") sortedLists = Items;
  if (sortStatus === "description") {
    sortedLists = Items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sortStatus === "packed") {
    sortedLists = Items.slice().sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }

  return (
    <div className="list">
      <ul>
        {sortedLists.map((it) => (
          <Item
            item={it}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={it.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortStatus}
          onChange={(e) => setSortStatus(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItem}>Clear List</button>
      </div>
    </div>
  );
}
