import { useState } from "react";
import Logo from "./Header";
import Form from "./Form";
import Stats from "./Footer";
import PackingList from "./Packing-list";

export default function App() {
  const [Items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function togglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  }
  function clearItems() {
    const isClear = window.confirm(
      "Are you sure you want to clear all the items?"
    );
    if (isClear) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        Items={Items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={togglePacked}
        onClearItem={clearItems}
      />
      <Stats Items={Items} />
    </div>
  );
}
