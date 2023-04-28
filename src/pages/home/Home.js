import React from "react";
import BooksCard from "../../components/BooksCard";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Home =()=>{
    return(<div className="home-container p-3">
        <InputGroup className="mb-3 mx-auto" style={{width:"40%"}}>
        <Form.Control
          placeholder="filter"
          aria-label="Recipient's username"
        />
        <InputGroup.Text>Filter</InputGroup.Text>
      </InputGroup>

        <div className="row">
        <div className="col-3 card-book">
        <BooksCard/>
        </div>
        <div className="col-3 card-book">
        <BooksCard/>
        </div>
        <div className="col-3 card-book">
        <BooksCard/>
        </div>
        <div className="col-3 card-book">
        <BooksCard/>
        </div>
        <div className="col-3 card-book">
        <BooksCard/>
        </div>
        <div className="col-3 card-book">
        <BooksCard/>
        </div>
        <div className="col-3 card-book">
        <BooksCard/>
        </div>
        <div className="col-3 card-book">
        <BooksCard/>
        </div>
        </div>
    </div>)
}

export default Home