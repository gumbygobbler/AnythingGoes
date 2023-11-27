import React, { useState, useEffect } from "react";

import FightGrid from "../components/FightGrid";
import FightCard from "../components/FightCard";

const Home = () => {
  const [fights, setFights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/fights")
      .then((response) => response.json())
      .then((data) => setFights(data))
      .catch((error) => console.error("Error fetching fights data:", error));
  }, []);

  return (
    <main>
      <h3>Home</h3>
      <hr />
      <h3>Your Fights</h3>
      <FightGrid colCount={4} xs={12} sm={6} md={4} lg={3}>
        {fights.length > 0 ? (
          fights.map((fight) => (
            <FightCard
              key={fight.id}
              id={fight.id}
              image={fight.image}
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
    </main>
  );
};

export default Home;
