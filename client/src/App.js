import logo from './logo.svg';
import './CSS/App.css';
import { useState, useEffect } from 'react'
import ToDo from './components/ToDo.js'
import axios from 'axios'

function App() {
  const [list, setList] = useState([])
  const [add, setAdd] = useState('')
  const listItems = list.map((object) => <ToDo item={object.task} id={object._id} list={list} setList={setList} />)

  useEffect(() => {
    axios.get("http://localhost:8080/items")
      .then((result) => {
        setList(result.data)
      })
  })

  const typing = (e) => {
    setAdd(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault()
    setList([...list, add])
    setAdd('')
    axios.post("http://localhost:8080/items", { task: add })
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