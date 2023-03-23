import React from 'react'
import { useState, useEffect } from 'react'
import '../CSS/ToDo.css'
import axios from 'axios'

const ToDo = ({ item, id, list, setList }) => {
  const [crossed, setCrossed] = useState(false)

  const crossFunc = (e) => {
    e.preventDefault()
    setCrossed(!crossed)
  }

  const deleteTask = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:8080/items/${id}`)
  }

  return (
    <div className="Task">
      {crossed && <p className='crossedText' onClick={crossFunc}>{item}</p>}
      {!crossed && <p className='notCrossedText' onClick={crossFunc}>{item}</p>}
      <button onClick={deleteTask}> X </button>
    </div>
  )
}

export default ToDo