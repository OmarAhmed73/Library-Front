import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Alert  from "react-bootstrap/Alert";

const UpdateReader=()=>{
    return(
        <div className="login-container">
    <h1 className="mb-4">Update Reader</h1>

        <Alert variant="danger" className="p-1">
            Reader failed to updated.
        </Alert>

        <Alert variant="success" className="p-1">
            Reader updated successfully.
        </Alert>

     <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Reader's Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <textarea className="form-control" placeholder="Details"></textarea>
      </Form.Group>

      <Button className="btn btn-dark" variant="primary" type="submit">
        Update Reader
      </Button>
    </div>
    )
}

export default UpdateReader