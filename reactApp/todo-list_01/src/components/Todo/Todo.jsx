import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Todo({ todo, onUpdate, onDelete }) {
  // console.log(props);s
  console.log(todo); //{id,text,status}
  const { id, text, status } = todo;
  const handleChange=(e)=>{
    const status=e.target.checked?"conmpleted":"active"
    onUpdate({...todo,status})
  }
  const handleDelete=()=>{onDelete(todo)}
  return (
    <li>
      <input type="checkbox" id={id}
      checked={status === "completed"} 
      onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}><FaTrashAlt /></button>
    </li>
  );
}

export default Todo;
