import React from "react";
import ButtonLink from './ButtonLink';
import "../styles.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ButtonLink to="/home" classes="general-button">
          Home
        </ButtonLink>
        <ButtonLink to="/about" classes="general-button">
          About
        </ButtonLink>
        <br />
        <ButtonLink to="/login" classes="general-button login-button">
          Login
        </ButtonLink>
      </nav>
    </div>
  );
};

export default NavBar;
