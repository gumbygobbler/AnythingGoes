import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import smallLogo from "../smallLogo.png"


const Header = () => {
  return (
    <div>
      <header>
        <Link style={{ textDecoration: "none" }} to="/logo">
          <div className = "smallLogo">
          <img src = {smallLogo} alt = " "/>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
