import React from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageBooks.css'
import { Link } from "react-router-dom";
import  Alert  from "react-bootstrap/Alert";

const ManageBooks=()=>{
    return(
        <div className="manage-books p-5">
        <div className="header-table mb-4">
        <h3 className="text-center">Manage Books</h3>
        </div>

        <Alert variant="danger" className="p-1">
            simple Alert.
        </Alert>

        <Alert variant="success" className="p-1">
            simple Alert.
        </Alert>

            <Table striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td> <img src="https://picsum.photos/200" alt="book-icon" className="image-icon"/> </td>
          <td>BookName</td>
          <td><p>Description of Book and some details of it are typed here</p></td>
          <td>
            <Link to={"/5"} className="btn btn-sm btn-info">Show</Link>
            <Link to={"5"} className="btn btn-sm btn-primary mx-1">Update</Link>
            <Link to={"/manage-chapters"} className="btn btn-sm btn-success mx-1">Manage Chapters</Link>
            <button className="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td> <img src="https://picsum.photos/200" alt="book-icon" className="image-icon"/> </td>
          <td>BookName</td>
          <td><p>Description of Book and some details of it are typed here</p></td>
          <td>
            <Link to={"/5"} className="btn btn-sm btn-info">Show</Link>
            <Link to={"5"} className="btn btn-sm btn-primary mx-1">Update</Link>
            <Link to={"/manage-chapters"} className="btn btn-sm btn-success mx-1">Manage Chapters</Link>
            <button className="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td> <img src="https://picsum.photos/200" alt="book-icon" className="image-icon"/> </td>
          <td>BookName</td>
          <td><p>Description of Book and some details of it are typed here</p></td>
          <td>
            <Link to={"/5"} className="btn btn-sm btn-info">Show</Link>
            <Link to={"5"} className="btn btn-sm btn-primary mx-1">Update</Link>
            <Link to={"/manage-chapters"} className="btn btn-sm btn-success mx-1">Manage Chapters</Link>
            <button className="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
      
      <Link to={"add"} className="new-book btn btn-success mt-2">Add New Book</Link>    
    </Table>
    
        </div>
    )
}

export default ManageBooks