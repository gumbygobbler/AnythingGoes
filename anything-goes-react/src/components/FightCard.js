import React from "react";
import "./components.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import Card.Body from "react-bootstrap/esm/CardBody";
// import Card.Img from "react-bootstrap/esm/CardImg";

//Props needed for a full card: Image, Name, Text
//const defaultImage = "/no-img.png";

const FightCard = ({ name, id, text }) => {
  const fightID = id;
  
  //console.log(id)
  return (
    <div>
      <Card
        className="fight-card d-flex justify-content-center"
        style={{
          backgroundColor: "rgb(40,40,40)",
          color: "rgb(200,200,200)",
          width: "14rem",
        }}
        onError={(e) => console.error("Error loading image:", e)}
      >
        <Card.Body>
          <Card.Title className="fight-item">{name}</Card.Title>
          <hr />
          <Card.Text className="fight-item fight-text">{text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-center">
            <Link
              to="/fight"
              state={{fightID}}>
              <Button type="button" variant="outline-light">
                View Fight
              </Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FightCard;
