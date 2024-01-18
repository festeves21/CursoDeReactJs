
import React from "react";
import { ToDoProvider } from "../ToDoContext";
import { AppUI } from "./AppUI";
/* const defultTodos = [
  { text: 'Tomar curso de Programacion Basica', completed: false },
  { text: 'Tomar Curso de HTML ', completed: true },
  { text: 'Curso de React', completed: false },
  { text: 'Curso de Aws ', completed: true },
  { text: 'Udemy Enseña', completed: false },
  { text: 'Cortar Cebolla', completed: false },

];
const stringfiedTodos = JSON.stringify(defultTodos)
localStorage.setItem('TODOS_V1', stringfiedTodos)
//localStorage.setItem('TODOS_V1',defultTodos)
 */

function App() {
  return (
    <ToDoProvider>
        <AppUI/>
    </ToDoProvider> 
  );
}


export default App;

