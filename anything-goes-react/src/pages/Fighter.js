import React from "react";

import { useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Fight = () => {
  //Fetch Request Here
  const location = useLocation();
  const { fighterId, fighterName, fighterImagePath, fighterManager } =
    location.state || {};

  return (
    <div className="mt-3 fighter-page">
      <div style={{ fontSize: 28 }}>{fighterName}</div>

      <div>
        <img className="fighter-page-img mt-3" src={fighterImagePath} />
      </div>

      <div className="mt-3" style={{ fontSize: 24 }}>
        {fighterManager}
      </div>

      <div className="fighter-stats mb-5 mt-3">
        <Stack gap={3}>
          <div className="align-items-center mt-5">Fight Participated: </div>
          <div className="align-items-center">Fights Won: </div>
        </Stack>
      </div>
      <div>
        <Stack gap={2}>
          <Button variant="light">Return to Home</Button>
          <Button type="button" variant="outline-danger">
            Retire Fighter
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Fight;
