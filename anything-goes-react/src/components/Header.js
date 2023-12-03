import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link style={{ textDecoration: "none" }} to="/home">
          <p className="home-title">Anything Goes</p>
        </Link>
      </header>
    </div>
  );
};

export default Header;
