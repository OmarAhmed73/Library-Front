import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../css/Login.css'
import { Link } from "react-router-dom";

const Login =()=>{
    return(<div className="login-container">
    <h1 className="mb-4">Login Form</h1>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className="btn btn-dark me-4" variant="primary" type="submit">
        Login
      </Button>
      <Link to={'/register'} className="btn btn-dark" variant="primary" >
        Create new account
      </Link>
    </div>)
}

export default Login