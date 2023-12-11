import React from "react";
import "../styles.css";
import a from './logoImages/1.png';
import b from './logoImages/2.jpg';
import c from './logoImages/3.jpg';
import d from './logoImages/4.png';
import e from './logoImages/5.jpg';
import f from './logoImages/6.png';
import g from './logoImages/7.png';
import h from './logoImages/8.png';
import i from './logoImages/9.png';
import j from './logoImages/10.png';
import k from './logoImages/11.png';
import l from './logoImages/12.jpg';
import m from './logoImages/13.png';
import n from './logoImages/14.jpg';
import o from './logoImages/15.png';
import p from './logoImages/16.png';
import q from './logoImages/17.png';
import r from './logoImages/18.png';
import s from './logoImages/19.png';
import t from './logoImages/20.png';
import u from './logoImages/21.png';
import v from './logoImages/22.png';
import w from './logoImages/23.png';
import x from './logoImages/24.png';
import y from './logoImages/25.png';
import { useState } from 'react';



const Logo = () => {
  const images = [
    a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y
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
        <button className = "newFightLogoBtn" 
                onClick={handleChangeImage}
                key = {animationKey}>
          Regenerate Random Fight</button>
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