import React from "react";
import './components.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Card.Body from "react-bootstrap/esm/CardBody";
// import Card.Img from "react-bootstrap/esm/CardImg";

//Props needed for a full card: Image, Name, Text
const defaultImage = '/no-img.png';

const FightCard = ({ image, name, text, link }) => {
  return (
    <div className="square-card">
      <Card style={{backgroundColor: 'rgb(40,40,40)', color:'rgb(200,200,200)'}} onError={(e) => console.error('Error loading image:', e)}>
        <Card.Img className="card-image" variant="top" src={image || defaultImage} />
        <Card.Body>
          <Card.Title className="fight-item">{name}</Card.Title>
          <Card.Text className="fight-item fight-text">{text}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button type="button" src={link} variant="outline-light">
              View Fight
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FightCard;
