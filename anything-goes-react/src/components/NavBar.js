import React, { useState, useContext } from "react";
import ButtonLink from "./ButtonLink";
import "../styles.css";
import AuthContext from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleUser,
  faHouse,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
  let { user, logoutUser } = useContext(AuthContext);
  const [openModalLogout, setOpenModalLogout] = useState(false);

  return (
    
    <div>
      <LogoutModal open = {openModalLogout}/>
      <nav>
        <ButtonLink to="/home" classes="navbar-button">
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
        <ButtonLink to="/about" classes="navbar-button">
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
              className="navbar-button"
              onClick={logoutUser}
            >
              Logout
            </button>
          </>
        ) : (
          <ButtonLink to="/login" classes="navbar-button">
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
