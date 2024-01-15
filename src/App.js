/* import logo from './platzi.webp'; */
/* import './App.css'; */
import { TodoCounter } from './ToDoCounter';
import { TodoSearch } from './ToDoSearch';
import { TodoList } from './ToDoList';
import { TodoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React, { useState } from "react";


const defultTodos = [
  { text: 'Tomar curso de Programacion Basica', completed: false },
  { text: 'Tomar Curso de HTML ', completed: true },
  { text: 'Curso de React', completed: false },
  { text: 'Curso de Aws ', completed: true },
  { text: 'Udemy Enseña', completed: false },
  { text: 'Cortar Cebolla', completed: false },

];


function App() {
  const [toDo, setToDo] = React.useState(defultTodos);
  let [searchValueFe, setShareValueFe] = React.useState('');
  //useState.useState("")

  const completedToDo = toDo.filter(
      array => array.completed).length;
  const totalToDo = toDo.length;

  const searchedTodos = toDo.filter((item) => {
                                                const lista = item.text.toLowerCase();
                                                const busqueda = searchValueFe.toLowerCase();
                                                return lista.includes(busqueda);
  })

const completeToDo = (text) => {
  const newTodos = [...toDo];
  const todoIndex = newTodos.findIndex(
    (item) => item.text == text
  );
  newTodos[todoIndex].completed=true;
  setToDo(newTodos);
}

const deleteToDo = (text) => {
  const newTodos = [...toDo];
  const todoIndex = newTodos.findIndex(
    (item) => item.text == text
  );
  newTodos.splice([todoIndex],1)
  setToDo(newTodos);

}

  return (
    <>

      <TodoCounter completed={completedToDo} total={totalToDo} />

      <TodoSearch
        searchValueFe={searchValueFe}
        setShareValueFe={setShareValueFe} />
      
      <TodoList>
        {searchedTodos.map(toDo => (
          <TodoItem 
                    key={toDo.text} 
                    text={toDo.text} 
                    completed={toDo.completed}
                    onComplete= { () => completeToDo( toDo.text)}
                    onDelete = { ()=> deleteToDo(toDo.text)} />
        ))}

      </TodoList>


      <CreateToDoButton arreglo={toDo}/>

    </>
  );
}


export default App;

