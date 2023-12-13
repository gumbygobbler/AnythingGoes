import React from "react";
import FightScreen from "../components/FightScreen.js";
import "../styles.css";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const tempImage = {
  
  name: "panda",
  image:
    "https://s.abcnews.com/images/Lifestyle/gty_baby_pandas_01_jc_160930_16x9_992.jpg",
  votes: 100,
};

const tempImage2 = {
  name: "sock",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpaajg0rIwUFWStnJV6LkHpKyoVuIdxOtLYS3GfBQ7ZnU6hyHa5s8lUmYE_GIglS5Lack&usqp=CAU",
  votes: 69,
};

const Home = () => {
  let { user } = useContext(AuthContext);
  const [fighter1, setFighter1] = useState({})
  const [fighter2, setFighter2] = useState({})
  const [votes1, setVotes1] = useState(0)
  const [votes2, setVotes2] = useState(0)
    

  useEffect(() => {
    fetch("http://localhost:8000/fighters/fights/" + fightID) 
    .then(response => response.json())
    .then(data => {
      setFighter1(data[0])
      setFighter2(data[1])
    })
    .catch((error) => console.log(error))

    fetch("http://localhost:8000/fights" + fightID)
    .then(response => response.json())
    .then(data => {
      setVotes1(data.voteCount1)
      setVotes2(data.voteCount2)
    }) 
    .catch((error) => console.log(error))
  }, []);

  const location = useLocation();
  const {fightID} = location.state || {};

  return (
    <>
      <h2>Fight:</h2>

      <FightScreen fighter1={fighter1} fighter2={fighter2} votes1={votes1} votes2={votes2} fightid={fightID}/>
    </>
  );
};

export default Home;
