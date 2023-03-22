import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [list, setList] = useState(['hi', 'test'])
  const [add, setAdd] = useState('')
  const listItems = list.map((word) => <p>{word}</p>)

  const typing = (e) => {
    setAdd(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault()
    setList([...list, add])
    setAdd('')
  }

  return (
    <div className="App">
      <h1 className="Title">To Do List</h1>
      <div className="addBar">
        <input value={add} onChange={typing}></input>
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;

// tags, subtags, storefront, users