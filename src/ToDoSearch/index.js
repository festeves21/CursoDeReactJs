import React from "react";
import "./ToDoSearch.css";
import { ToDoContext } from "../ToDoContext";

function TodoSearch() {

  const { searchValueFe ,setShareValueFe} =React.useContext(ToDoContext);

  return <input 
                placeholder="Cortar cebolla" 
                className="TodoSearch" 
                value={searchValueFe}
                onChange={(event)=>{
                                    setShareValueFe(event.target.value);
                                    
                                }}
                />;
}

export { TodoSearch };
