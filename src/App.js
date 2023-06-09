import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = item => {
    setItems(prev => [...prev, item]);
  };

  const handleDeleteItem = id => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleToggleItem = id => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleAllClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items!"
    );
    if (!confirmed) return;
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        items={items}
        onAllClear={handleAllClearItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
