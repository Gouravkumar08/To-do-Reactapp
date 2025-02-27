import React from 'react'

export default function Todo({todo,index,deltodo}) {
  return (
    <div className="tasks">
        <p>{todo}</p>
        <div className="actions">
          <input type="checkbox" />
          <button onClick={()=>deltodo(index)}>Delete</button>
        </div>
      </div>
  )
}
