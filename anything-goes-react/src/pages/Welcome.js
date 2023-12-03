import React from "react";
import ButtonLink from "../components/ButtonLink"
import "../styles.css"

const Welcome = () => {

  return (
    <div id="Welcome">
      <h1>WELCOME TO ANYTHING GOES</h1>
      <br></br>
      <p>YOU ARE ABOUT TO ENTER ONE OF THE FIERCEST FIGHTING COMPETITIONS EVER ORCHESTRATED! ARE YOU READY TO WIN OR WILL YOUR FIGHTERS BE CRUSHED UNDERNEATH THE OVERWHELMING PRESSURE??
      </p>
      <br></br>
      <p>
        Its time to enter the ring.
      </p>
      <br></br>
      <ButtonLink to='/home' classes="general-button">
        Enter the Ring</ButtonLink>
      <br></br>
      <ButtonLink to='/login' classes="general-button">
        Clock in</ButtonLink>
    </div>
  );
};

export default Welcome;
