import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import smallLogo from "../smallLogo.png";


const Header = () => {
  return (
    <div>
      <header className = "headerContainer">
        <Link style={{ textDecoration: "none" }} to="/logo">
          <div className = "smallLogo">
          <img src = {smallLogo} alt = " " style = {{height: "70px", width:"190px"}}/>
          <h1 className = "siteTitle">
              Anything Goes</h1>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
