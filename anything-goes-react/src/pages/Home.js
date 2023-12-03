import React, { useState, useEffect } from "react";

import FightGrid from "../components/FightGrid";
import FighterGrid from "../components/FighterGrid";
import FightCard from "../components/FightCard";
import FighterCard from "../components/FighterCard";

import AddCard from "../components/AddCard";

const Home = () => {
  const [fights, setFights] = useState([]);
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/fights")
      .then((response) => response.json())
      .then((data) => setFights(data))
      .catch((error) => console.error("Error fetching fights data:", error));

    fetch("http://localhost:3001/fighters")
      .then((response) => response.json())
      .then((data) => setFighters(data))
      .catch((error) => console.error("Error fetching fighter data:", error));
  }, []);

  return (
    <div className="mt-3 mb-4 border-0">
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
              imagepath={fighter.imagepath}
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
              text={fight.text}
              link={fight.link}
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

export default Home;
