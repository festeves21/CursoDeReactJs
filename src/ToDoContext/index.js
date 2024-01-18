import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext()

function ToDoProvider({children} ) {
     console.log('fe');
    const { item: toDo, saveItem: saveToDos, loading, error 
    } = useLocalStorage('TODOS_V1', []);
    const [searchValueFe, setShareValueFe] = React.useState('');
    const [openModal, setOpenModal] = React.useState(true);



    const completedToDo = toDo.filter(
        array => array.completed).length;
    const totalToDo = toDo.length;
        console.log('totalToDo' , completedToDo)
   const searchedTodos = toDo.filter((item) => {
        const lista = item.text.toLowerCase();
        const busqueda = searchValueFe.toLowerCase();
        return lista.includes(busqueda);
    });

    const completeToDo = (text) => {
        const newTodos = [...toDo];
        const todoIndex = newTodos.findIndex(
            (item) => item.text === text
        );
        newTodos[todoIndex].completed = true;
        saveToDos(newTodos);
    };

    const deleteToDo = (text) => {
        const newTodos = [...toDo];
        const todoIndex = newTodos.findIndex(
            (item) => item.text === text
        );
        newTodos.splice([todoIndex], 1)
        saveToDos(newTodos);

    }; 
    //const constanteFe= 'FE';
    //console.log('fE LOADIN',loading);
    return (
    <ToDoContext.Provider value={{ 
      //  constanteFe,
        loading,
         error, 
        completedToDo, 
        totalToDo, 
        searchValueFe, 
        setShareValueFe, 
        searchedTodos, 
        completeToDo, 
        deleteToDo,
        openModal,
        setOpenModal,
    }}>
        {children}
    </ToDoContext.Provider>
    );
}


export { ToDoContext, ToDoProvider }