import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [show, setShow] = useState(false);

  //function modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //function add todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  //function todo complete
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  //function edit todo
  const editTodo = (updateText, id) =>{
   setTodos(
    todos.map((todo)=>{
      if(todo.id === id){
        todo.text = updateText
      }
      return todo
    })
   )
  }

  //function delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  //function onChange input search
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  //function filter search
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-md-center">
          <div className="col-md-6 offset-md-3">
            <h1 className='text-white'>Todo List</h1>
          </div>
        </div>
        <div className="row mx-5 px-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Weather</h3>
              </div>
              <div className="card-body">
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <div className="input-group" style={{width: '250px'}}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchText}
                        onChange={handleSearch}
                      />
                  </div>
                  <button className='btn btn-primary' onClick={handleShow}>
                      Add Task
                    </button>
                </div>
              </div>
              <div className="card-body">
                <TodoList todos={filteredTodos} setTodos={setTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
              </div>
            </div>
          </div>
        </div>
        <AddTodoForm addTodo={addTodo} show={show} handleClose={handleClose}/>
      </div>
    
  </div>
  );
}

export default App
