import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const ButtonLink = ({ to, classes, children }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      <button type="button" className={classes}>
        {children}
      </button>
    </Link>
  );
};

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
