import React, { useState } from 'react';
import './shop.css';

function Shop() {
  const [active, setActive] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setActive([...active, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    const newItems = [...active];
    newItems.splice(index, 1);
    setActive(newItems);
  };

  return (
    <div className="Shop">
      <h1>SHOPPING LIST</h1>
      <div className="input-container">
        <input  type="text" value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="ENTER AN ITEM"
        />
        <button onClick={addItem}>ADD TO CART</button>
      </div>
      <ul>
        {active.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => deleteItem(index)}>CANCEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;