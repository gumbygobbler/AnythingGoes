import React from "react";
import "./components.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import Card.Body from "react-bootstrap/esm/CardBody";
// import Card.Img from "react-bootstrap/esm/CardImg";

//Props needed for a full card: Image, Name, Text
const defaultImage = "/no-img.png";

const FighterCard = ({ id, name, fighterImg, manager }) => {
  const fighterId = id;
  const fighterName = name;
  let fighterImagePath = fighterImg;
  const fighterManager = manager;
  // fighterImagePath = "django-backend/backend" + fighterImagePath;
  // console.log(id, name, imagepath);
  return (
    <div>
      <Card
        className="fighter-card d-flex justify-content-center"
        style={{
          backgroundColor: "rgb(40,40,40)",
          color: "rgb(200,200,200)",
          width: "20rem",
        }}
        onError={(e) => console.error("Error loading image:", e)}
      >
        <Card.Body>
          <Card.Title className="fight-item">{name}</Card.Title>
          <hr />
          <Card.Img
            className="card-image"
            variant="top"
            src={fighterImagePath}
          />
          <hr />
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-center">
            <Link
              to="/fighter"
              state={{
                fighterId,
                fighterName,
                fighterImagePath,
                fighterManager,
              }}
            >
              <Button type="button" variant="outline-light">
                View Fighter
              </Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FighterCard;
