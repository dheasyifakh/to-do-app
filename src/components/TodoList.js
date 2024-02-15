import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo, index, setTodos }) => {
    return (
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} index={index}/>
        ))}
      </ul>
    );
  };

export default TodoList;