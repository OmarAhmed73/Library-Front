import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register =()=>{
    return(<div className="login-container">
    <h1>Registration Form</h1>
    <Form>
    <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Phone Number" />
      </Form.Group>

     <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
        <div>
          <Form.Check
            inline
            label="Admin"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Reader"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          </div>
          </div>
      ))}

      <Button className="btn btn-dark" variant="primary" type="submit">
        Sign Up
      </Button>
      </Form>
    </div>)
}

export default Register