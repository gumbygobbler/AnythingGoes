import React, { useContext } from "react";
import ButtonLink from "./ButtonLink";
import "../styles.css";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  let { user, logoutUser } = useContext(AuthContext);

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
        {user ? (
          <>
            <p>User: {user.username}</p>
            <button
              className="general-button login-button"
              onClick={logoutUser}
            >
              Logout
            </button>
          </>
        ) : (
          <ButtonLink to="/login" classes="general-button login-button">
            Login
          </ButtonLink>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
