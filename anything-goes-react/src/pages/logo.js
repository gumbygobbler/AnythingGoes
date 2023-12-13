import React from "react";
import "../styles.css";
import a from "./logoImages/1.png";
import b from "./logoImages/2.jpg";
import c from "./logoImages/3.jpg";
import d from "./logoImages/4.png";
import e from "./logoImages/5.jpg";
import f from "./logoImages/6.png";
import g from "./logoImages/7.png";
import h from "./logoImages/8.png";
import i from "./logoImages/9.png";
import j from "./logoImages/10.png";
import k from "./logoImages/11.png";
import l from "./logoImages/12.jpg";
import m from "./logoImages/13.png";
import n from "./logoImages/14.jpg";
import o from "./logoImages/15.png";
import p from "./logoImages/16.png";
import q from "./logoImages/17.png";
import r from "./logoImages/18.png";
import s from "./logoImages/19.png";
import t from "./logoImages/20.png";
import u from "./logoImages/21.png";
import v from "./logoImages/22.png";
import w from "./logoImages/23.png";
import x from "./logoImages/24.png";
import y from "./logoImages/25.png";
import z from "./logoImages/26.png";
import aa from "./logoImages/27.png";
import ab from "./logoImages/28.png";
import ac from "./logoImages/29.png";
import ad from "./logoImages/30.png";
import ae from "./logoImages/31.png";
import af from "./logoImages/32.png";
import ag from "./logoImages/33.png";
import ah from "./logoImages/34.png";
import ai from "./logoImages/35.png";
import aj from "./logoImages/36.png";
import ak from "./logoImages/37.png";
import al from "./logoImages/38.png";
import am from "./logoImages/39.png";
import an from "./logoImages/40.png";
import ao from "./logoImages/41.png";
import ap from "./logoImages/42.png";
import aq from "./logoImages/43.png";
import ar from "./logoImages/44.png";
import at from "./logoImages/45.png";
import au from "./logoImages/46.png";
import { useState } from "react";

const Logo = () => {
  const images = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    aa,
    ab,
    ac,
    ad,
    ae,
    af,
    ag,
    ah,
    ai,
    aj,
    ak,
    al,
    am,
    an,
    ao,
    ap,
    aq,
    ar,
    at,
    au,
  ];

  const [currentLeftImage, setcurrentLeftImage] = useState(images[28]);
  const [currentRightImage, setcurrentRightImage] = useState(images[45]);
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
    <div className="logoContainer">
      <div className="leftFight">
        <img src={currentLeftImage} key={animationKey} alt="Random Image" />
      </div>

      <div>
        <button
          className="newFightLogoBtn"
          onClick={handleChangeImage}
          key={animationKey}
        >
          Regenerate Random Fight
        </button>
      </div>

      <div className="rightFight">
        <img src={currentRightImage} alt="Random Image" key={animationKey} />
      </div>
    </div>
  );
};

export default Logo;
