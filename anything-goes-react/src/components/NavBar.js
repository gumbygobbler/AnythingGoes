import React, { useState, useContext } from "react";
import ButtonLink from "./ButtonLink";
import "../styles.css";
import AuthContext from "../context/AuthContext";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleUser,
  faHouse,
  faInfoCircle,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

=======
import LogoutModal from "./LogoutModal";
>>>>>>> a209749055ff5ad018414530bfce32462d402f3d

const NavBar = () => {
  let { user, logoutUser } = useContext(AuthContext);
  const [openModalLogout, setOpenModalLogout] = useState(false);

  return (
    
    <div>
      <LogoutModal open = {openModalLogout}/>
      <nav>
<<<<<<< HEAD
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
=======
        <ButtonLink classes="general-button">
>>>>>>> a209749055ff5ad018414530bfce32462d402f3d
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
<<<<<<< HEAD
            <button
              className="general-button"
=======
            <button onClick = {() => setOpenModalLogout(true)}
>>>>>>> a209749055ff5ad018414530bfce32462d402f3d
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
