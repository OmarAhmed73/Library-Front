import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Alert  from "react-bootstrap/Alert";

const UpdateBook=()=>{
    return(
        <div className="login-container">
    <h1 className="mb-4">Update Book Form</h1>

        <Alert variant="danger" className="p-1">
            Book failed to updated.
        </Alert>

        <Alert variant="success" className="p-1">
            Book updated successfully.
        </Alert>

     <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Book's Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <textarea className="form-control" placeholder="Description"></textarea>
      </Form.Group>

      <Button className="btn btn-dark" variant="primary" type="submit">
        Update Book
      </Button>
    </div>
    )
}

export default UpdateBook