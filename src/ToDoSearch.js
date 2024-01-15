import React, { useState } from "react";
import "./ToDoSearch.css";

function TodoSearch({searchValueFe,setShareValueFe}) {



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
