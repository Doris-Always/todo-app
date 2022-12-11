import React, { useState } from "react";
import '../style.css'

function ToDoItems(props){
    const[isDone,checkIsDone] = useState(false)
    const handleStrikeThrough =()=>{
        checkIsDone((preValue) =>{
            return !preValue;
        })
    }
    return(
        <div onClick={handleStrikeThrough}>
            <li style={{textDecoration: isDone? "line-through" : "none"}}>{props.text}</li>
        </div>
      
    );
}
export default ToDoItems;