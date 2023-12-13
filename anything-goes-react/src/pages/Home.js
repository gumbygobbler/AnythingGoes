import React, { useState, useEffect, useContext } from "react";

import "../styles.css";

import FightGrid from "../components/FightGrid";
import FighterGrid from "../components/FighterGrid";
import FightCard from "../components/FightCard";
import FighterCard from "../components/FighterCard";

import AddCard from "../components/AddCard";
import AuthContext from "../context/AuthContext";

const HomeVisitor = () => {
  const [fights, setFights] = useState([]);
  const [fighters, setFighters] = useState([]);

  let { user } = useContext(AuthContext);
  useEffect(() => {
    // fetch("http://localhost:8000/fights")
    //   .then((response) => response.json())
    //   .then((data) => setFights(data))
    //   .catch((error) => console.error("Error fetching fights data:", error));

    fetch("http://localhost:8000/fighters/" + user.user_id)
      .then((response) => response.json())
      .then((data) => setFighters(data))
      .catch((error) => console.error("Error fetching fighter data:", error));
    console.log();

    fetch("http://localhost:8000/fights")
      .then((response) => response.json())
      .then((data) => setFights(data))
      .catch((error) => console.error("Error fetching fight data:", error))
  }, []);

  return (
    <div className="mt-3 mb-4 border-0" style={{ height: "100%", textShadow: "0px 4px 10px rgba(179, 147, 211, 0.8)"}}>

      <h2>Home</h2>
      <hr />
      <h3>Your Fighters</h3>
      <FighterGrid
        colCount={4}
        sm={6}
        md={3}
        className="ml-1 mr-1"
        style={{ borderTop: "none" }}
      >
        {fighters.length > 0 ? (
          fighters.map((fighter) => (
            <FighterCard
              key={fighter.id}
              id={fighter.id}
              name={fighter.name}
              fighterImg={fighter.fighterImg}
              manager={fighter.manager}
            />
          ))
        ) : (
          <div>No Fighters Yet...</div>
        )}
      </FighterGrid>

      <div className="d-flex justify-content-center">
        <AddCard />
      </div>
      <hr />
      <h3>Your Fights</h3>
      <FightGrid colCount={4} sm={6} md={3} className="ml-1 mr-1">
        {fights.length > 0 ? (
          fights.map((fight) => (
            <FightCard
              key={fight.id}
              id={fight.id}
              name={fight.name}
              text={"What more is there to say?"}
            />
          ))
        ) : (
          <div>No Fights to See Here...</div>
        )}
      </FightGrid>
      <hr />
      <h3>Explore Other Fights</h3>
      <hr />
    </div>
  );
};

export default HomeVisitor;
