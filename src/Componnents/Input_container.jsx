import React from "react";

export function Input_container({inputValue, writetodo,addtodo}) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={writetodo}
        placeholder="add new task"
      />
      <button onClick={addtodo}>add task</button>
    </div>
  );
}
