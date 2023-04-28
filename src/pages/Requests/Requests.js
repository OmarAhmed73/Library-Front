import React from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageBooks.css'
import { Link } from "react-router-dom";
import  Alert  from "react-bootstrap/Alert";

const Requests=()=>{
    return(
        <div className="manage-books p-5">
        <div className="header-table mb-4">
        <h3 className="text-center">View Requests</h3>
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
          <th>Requests</th>
          <th>Type of request</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>request</td>
          <td><p>type of request that sent is typed here</p></td>
          <td>
          <Link to={"5"} className="btn btn-sm btn-success mx-2">Accept</Link>
            <button className="btn btn-sm btn-danger">Decline</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>request</td>
          <td><p>type of request that sent is typed here</p></td>
          <td>
            <Link to={"5"} className="btn btn-sm btn-success mx-2">Accept</Link>
            <button className="btn btn-sm btn-danger">Decline</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>request</td>
          <td><p>type of request that sent is typed here</p></td>
          <td>
            <Link to={"5"} className="btn btn-sm btn-success mx-2">Accept</Link>
            <button className="btn btn-sm btn-danger">Decline</button>
          </td>
        </tr>
      </tbody>   
    </Table>
    
        </div>
    )
}

export default Requests