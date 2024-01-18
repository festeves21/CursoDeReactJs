import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css";

function TodoCounter() {
  const { completedToDo ,totalToDo} =React.useContext(ToDoContext);
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedToDo} </span> de <span>{totalToDo}</span> ToDos
    </h1>
  );
}

export { TodoCounter };
