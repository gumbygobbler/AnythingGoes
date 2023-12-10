import React from "react";
import "../styles.css";
import a from './logoImages/1.png';
import b from './logoImages/2.jpg';
import c from './logoImages/3.jpg';
import d from './logoImages/4.png';
import e from './logoImages/5.jpg';
import kirby from './logoImages/kirby.png';
import { useState } from 'react';



const Logo = () => {
  const images = [
    a,
    b,
    c,
    d,
    e,
    kirby
  ];

  const [currentLeftImage, setcurrentLeftImage] = useState(images[0]);
  const [currentRightImage, setcurrentRightImage] = useState(images[1]);
  const [animationKey, setAnimationKey] = useState(0);

  // Function to handle image change on click
  const handleChangeImage = () => {
  const randomIndexLeftImage = Math.floor(Math.random() * images.length);
  const newLeftImage = images[randomIndexLeftImage];
  setcurrentLeftImage(newLeftImage);

  const randomIndexRightImage = Math.floor(Math.random() * images.length);
  const newRightImage = images[randomIndexRightImage];
  setcurrentRightImage(newRightImage);
  
  setAnimationKey(animationKey + 1);
  };

  

  return (
    <div className = "logoContainer">
  
      <div className = "leftFight">
        <img  src={currentLeftImage}
              key = {animationKey}
              alt="Random Image"
              />
      </div>

      <div>
        <button className = "backToHomeBtn" onClick={handleChangeImage}>Change Image</button>
      </div>

      <div className="rightFight">
        <img  src={currentRightImage} 
              alt="Random Image" 
              key = {animationKey}/>
      </div>
      
    </div>
  );
};
  
  export default Logo;