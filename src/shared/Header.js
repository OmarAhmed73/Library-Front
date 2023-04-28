import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


const Logout=()=>{}

const Header =()=>{
    return(<div>
<Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand style={{fontFamily: "Sigmar, cursive"}} href="#home"><Link className="nav-link" to={'/'}><h3>Library</h3></Link></Navbar.Brand>
          <Nav className="mx-auto text-center">
          <Link className="nav-link" to={'/'}><h5>Books list</h5></Link>
          <Link className="nav-link" to={'/login'}><h5>Login</h5></Link>
          <Link className="nav-link" to={'/register'}><h5>Register</h5></Link>
          <Link className="nav-link" to={'/requests'}><h5>Requests</h5></Link>
          <NavDropdown title="Manage" menuVariant="dark" style={{fontSize:"18.1px",fontWeight:"bolder"}}>
              <Link className="dropdown-item" to={'/manage-books'}>Books</Link>
              <Link className="dropdown-item" to={'/manage-chapters'}>Chapters</Link>
              <Link className="dropdown-item" to={''}>Readers</Link>
            </NavDropdown>
          </Nav>
          
        <Nav className="ms-auto">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        <Nav.Link className="text-right" onClick={Logout}><h5>Logout</h5></Nav.Link>
        </Nav>

        </Container>
      </Navbar>
    </div>)
}

export default Header