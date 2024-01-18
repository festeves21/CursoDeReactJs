import React from 'react';
import { TodoCounter } from '../ToDoCounter';
import { TodoSearch } from '../ToDoSearch';
import { TodoList } from '../ToDoList';
import { TodoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { EmptyToDos } from '../EmptyToDos';
import { ToDoContext } from '../ToDoContext';
import { Modal } from '../Modal';


function AppUI() {

     const { loading, error, searchedTodos, completeToDo, deleteToDo,openModal,setOpenModal, } = React.useContext(ToDoContext);  
 /*   const {loading,error,searchedTodos,completeToDo,deleteToDo} = React.useContext(ToDoContext)*/
    return (<>  
        <TodoCounter />
        <TodoSearch/>
                <TodoList>
                    {loading && <ToDosLoading />}
                    {error && <ToDosError />}
                    {(!loading && searchedTodos.length === 0) && <EmptyToDos />}
                    {searchedTodos.map(toDo => (
                        <TodoItem
                            key={toDo.text}
                            text={toDo.text}
                            completed={toDo.completed}
                            onComplete={() => completeToDo(toDo.text)}
                            onDelete={() => deleteToDo(toDo.text)} />
                    ))}
                </TodoList> 
        <CreateToDoButton  setOpenModal={setOpenModal} /> 
        {openModal && (
            <Modal>
                <ToDoForm/>
            </Modal>
        )}
        

    </>);
}
export { AppUI };