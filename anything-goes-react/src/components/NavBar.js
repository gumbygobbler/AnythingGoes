import React, { useContext } from "react";
import ButtonLink from "./ButtonLink";
import "../styles.css";
import AuthContext from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleUser,
  faHouse,
  faInfoCircle,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
  let { user, logoutUser } = useContext(AuthContext);

  return (
    
    <div>
      <nav>
        <ButtonLink to="/home" classes="general-button">
        <FontAwesomeIcon
              icon={faHouse}
              style={{
                fontSize: "20px",
                marginRight: "1px",
                padding: "3px",
                paddingTop: "0px",
                color: "rgb(130, 39, 163)"
              }}
            />
          Home
        </ButtonLink>
        <ButtonLink to="/about" classes="general-button">
        <FontAwesomeIcon
              icon={faInfoCircle}
              style={{
                fontSize: "20px",
                marginRight: "1px",
                padding: "3px",
                color: "rgb(130, 39, 163)",
              }}
            />
          About
        </ButtonLink>
        <br />
        {user ? (
          <>
            <p>User: {user.username}</p>
            <button
              className="general-button"
              onClick={logoutUser}
            >
              Logout
            </button>
          </>
        ) : (
          <ButtonLink to="/login" classes="general-button">
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{
                fontSize: "20px",
                marginRight: "1px",
                padding: "3px",
                color: "rgb(130, 39, 163)",
              }}
            />
            Login
          </ButtonLink>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
