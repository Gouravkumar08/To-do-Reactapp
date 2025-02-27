import React from "react";
import Todo from "./Todo";
export function Task_container({ todos, deltodo }) {
  return (
    <div className="task-container">
      {todos.map((todo, index) => {
        return <Todo key={index} index={index} todo={todo} deltodo={deltodo} />;
      })}
    </div>
  );
}
