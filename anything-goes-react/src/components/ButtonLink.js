import React from "react";
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

export default ButtonLink;