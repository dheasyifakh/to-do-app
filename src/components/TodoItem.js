import React,{useState} from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo, index, setTodos }) => {
    const [editing, setEditing] = useState(false);
    const handleEditing = () => {
        setEditing(true);
      };
      let viewMode = {};
      let editMode = {};
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
        }
    };
    return (
      <li style={{ textDecoration: todo.completed ? 'line-through' : 'none', display: 'flex', justifyContent: 'space-between', width:'400px' }}>
        <input
            type="text"
            value={todo.text}
            className="form-control"
            style={editMode}
            onChange={(e)=>setTodos(e.target.value, todo.id)}
            onKeyDown={handleUpdatedDone}
        />

        <br />
        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
        <span>
            <button className="btn btn-success" style={{marginRight: "1rem"}} onClick={handleEditing}><FaEdit/></button>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}><FaTrash/></button>
        </span>
        
      </li>
    );
  };

export default TodoItem