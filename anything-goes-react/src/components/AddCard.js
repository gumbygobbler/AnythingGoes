import React from "react";
import './components.css';
import { Link } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Card.Body from "react-bootstrap/esm/CardBody";
// import Card.Img from "react-bootstrap/esm/CardImg";

//Props needed for a full card: Image, Name, Text
const AddCard = () => {
  return (
    <div className="square-card">
      <Card style={{backgroundColor: 'rgb(40,40,40)', color:'rgb(200,200,200)'}}>
        {/* Add a plus image for adding a card */}
        <Card.Img />
        <Card.Body>
          <Card.Title className="fight-item">Add Fight</Card.Title>
          <div className="d-flex justify-content-center">
            <Link to='/addfight'>
              <Button type="button" variant="outline-light">
                Add a New Fight
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddCard;
