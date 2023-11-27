import React from "react";
import FightScreen from "../components/FightScreen.js";
import "../styles.css"


const tempImage = {
  "name": "panda",
  "image": "https://s.abcnews.com/images/Lifestyle/gty_baby_pandas_01_jc_160930_16x9_992.jpg",
  "votes": 100
}

const tempImage2 = {
  "name": "sock",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpaajg0rIwUFWStnJV6LkHpKyoVuIdxOtLYS3GfBQ7ZnU6hyHa5s8lUmYE_GIglS5Lack&usqp=CAU",
  "votes": 69
}

const Home = () => {
  return (
    <>
      <h2>Fight</h2>
      <FightScreen fighter1 = {tempImage} fighter2 = {tempImage2}/>
    </>
  );
};

export default Home;
