import "./styles.css";
import { useState } from "react";

export default function App() {
  // const [data,setData]=useState("")

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputData) {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });

    setItems(updateditems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <div className="App">
      <div className="additems">
        <input
          type="text"
          placeholder={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addItem}>➕</button>
      </div>

      <div className="showItems">
        {items.map((elem, ind) => {
          return (
            <div className="eachItem" key={ind}>
              <h3>{elem}</h3>
              <button className="add-btn" onClick={() => deleteItem(ind)}>
                ❌
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={removeAll}>
          <span>Check list</span>
        </button>
      </div>
    </div>
  );
}
