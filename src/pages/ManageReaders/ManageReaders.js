import React from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const ManageReaders=()=>{
    return(
        <div> <br></br>
            {/* Book Chapters */}
    <Table class="rounded" striped bordered hover variant="dark">
    <thead>
        <tr>
         <td colSpan={3}><h4>Readers</h4></td>
        </tr>
      </thead>
      <thead>
        <tr>
         <td>Reader Name</td>
         <td>Details</td>
         <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Description Description Description Description</td>
          <td>
            <Link to={"5"} className="btn btn-sm btn-primary mx-2">Update</Link>
            <button className="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Description Description Description Description</td>
          <td>
            <Link to={"5"} className="btn btn-sm btn-primary mx-2">Update</Link>
            <button className="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
        
      </tbody>
      <div style={{marginBottom:"2px"}}>
      <Link to={"/manage-readers/add"} className="new-book btn btn-success m-2">Add New Reader</Link> 
      </div>
    </Table>
        </div>
    );
}

export default ManageReaders;