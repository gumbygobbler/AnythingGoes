import React from "react";

import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Fighter = () => {
  let { user } = useContext(AuthContext);
  const [managerName, setManagerName] = useState("");
  //Fetch Request Here
  useEffect(() => {
    fetch("http://localhost:8000/managers/" + user.user_id)
      .then((response) => response.json())
      .then((data) => setManagerName(data.name))
      .catch((error) => console.error("Error fetching fighter data:", error));
    console.log();
  }, []);

  const location = useLocation();
  const { fighterId, fighterName, fighterImagePath, fighterManager } =
    location.state || {};

  return (
    <div className="mt-3 fighter-page">
      <div style={{ fontSize: 28 }}>Fighter: {fighterName}</div>

      <div>
        <img className="fighter-page-img mt-3" src={fighterImagePath} />
      </div>

      <div className="mt-3" style={{ fontSize: 24 }}>
        Manager: {managerName}
      </div>

      <div className="fighter-stats mb-5 mt-3">
        <Stack gap={3}>
          <div className="align-items-center mt-5">Fight Participated: </div>
          <div className="align-items-center">Fights Won: </div>
        </Stack>
      </div>
      <div>
        <Stack gap={2}>
          <Link to="/home">
            <Button variant="light">Return to Home</Button>
          </Link>
          <Button type="button" variant="outline-danger">
            Retire Fighter
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Fighter;
