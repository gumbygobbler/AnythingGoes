import React, { useState, useEffect, useContext } from "react";

import "../styles.css";

import FightGrid from "../components/FightGrid";
import FighterGrid from "../components/FighterGrid";
import FightCard from "../components/FightCard";
import FighterCard from "../components/FighterCard";

import AddCard from "../components/AddCard";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const [fights, setFights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/fights")
      .then((response) => response.json())
      .then((data) => setFights(data))
      .catch((error) => console.error("Error fetching fights data:", error));
  }, []);

  return (
    <div className="mt-3 mb-4 border-0 home">
      <h3>Explore Some Fights</h3>
      <hr />
    </div>
  );
};

export default Home;
