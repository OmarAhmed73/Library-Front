import React from "react";
import Table from 'react-bootstrap/Table';
import '../../css/BookDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from "react-router-dom";

const BookDetails=()=>{
    return(<div className="book-details-container p-4">
          {/* Book Model */}
       <div>
       <Table striped bordered hover variant="dark">
      <thead>
          <tr style={{boxSizing:"20px"}}>
          <td colSpan={2}><h3>Book Details</h3></td>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td><h5>BookName</h5></td>
          <td >name</td>
        </tr>
        <tr>
          <td><h5>Description</h5></td>
          <td >Description of Book and some details of it are typed here</td>
        </tr>
        <tr>
          <td><h5>Author</h5></td>
          <td >author name and his birth and death date</td>
        </tr>
        <tr>
          <td><h5>Field</h5></td>
          <td >Field Field Field Field Field</td>
        </tr>
        <tr>
          <td><h5>Publication date</h5></td>
          <td>Field </td>
        </tr>
        <tr>
          <td><h5>PDF File</h5></td>
          <td><button type="button" class="btn btn-primary">
    Open PDF
  </button> </td>
        </tr>
      </tbody>    
    </Table>
    <Link className="btn btn-dark" variant="primary" >Request Book</Link>
       </div>
       <hr></hr>
       <div>
       <Table striped bordered hover variant="dark">
      <thead>
          <tr style={{boxSizing:"20px"}}>
          <td colSpan={2}><h3>Book Chapters</h3></td>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td><h5>Chapter 1</h5></td>
          <td >chapter name</td>
        </tr>
        <tr>
          <td><h5>Chapter 2</h5></td>
          <td >chapter name</td>
        </tr>
        <tr>
          <td><h5>Chapter 3</h5></td>
          <td >chapter name</td>
        </tr>
        <tr>
          <td><h5>Chapter 4</h5></td>
          <td >chapter name</td>
        </tr>
        <tr>
          <td><h5>Chapter 5</h5></td>
          <td>chapter name </td>
        </tr>
      </tbody>    
    </Table>
       </div>
    </div>)
}

export default BookDetails