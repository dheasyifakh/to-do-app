import React,{useState} from "react";
import {Button, Modal } from 'react-bootstrap';

const AddTodoForm = ({ addTodo, show, handleClose }) => {
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      addTodo(text);
      setText('');
    };
  
    return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input className="form-control" type="text" value={text} onChange={e => setText(e.target.value)} />
                    <button className="btn btn-primary" type="submit">Add Todo</button>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      
    );
  };

  export default AddTodoForm