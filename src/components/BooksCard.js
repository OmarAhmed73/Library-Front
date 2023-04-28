import React from "react";
import Card from 'react-bootstrap/Card';
import '../css/BookCard.css'
import { Link } from "react-router-dom";

const BooksCard =()=>{
    return(
        <div className="py-3">
        <Card>
        <Card.Img className="card-image" variant="top" src="https://picsum.photos/200"/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link className="btn btn-dark me-2" variant="primary" to={"/5"}>Show Details</Link> 
          <Link className="btn btn-dark ms-2" variant="primary" to={''}>Request Book</Link> 
        </Card.Body>
      </Card>
      </div>)
}

export default BooksCard