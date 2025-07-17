import { useState } from "react";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import data from "../data/items";

function App() {
  const [items, setItems] = useState(data);

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App light">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
