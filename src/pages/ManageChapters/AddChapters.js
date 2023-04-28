import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Alert  from "react-bootstrap/Alert";

const AddChapters=()=>{
    return(
        <div className="login-container">
    <h1 className="mb-4">Add New Chapter</h1>

        <Alert variant="danger" className="p-1">
            Chapter failed to added.
        </Alert>

        <Alert variant="success" className="p-1">
            Chapter added successfully.
        </Alert>

     <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Chapter's Title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <textarea className="form-control" placeholder="Description"></textarea>
      </Form.Group>

      <Form.Group className="mb-3">
        <input type="file" className="form-control"></input>
      </Form.Group>
      <Button className="btn btn-dark" variant="primary" type="submit">
        Add New Chapter
      </Button>
    </div>
    )
}

export default AddChapters