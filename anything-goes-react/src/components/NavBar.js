import React, { useState, useContext } from "react";
import ButtonLink from "./ButtonLink";
import "../styles.css";
import AuthContext from "../context/AuthContext";
import LogoutModal from "./LogoutModal";

const NavBar = () => {
  let { user, logoutUser } = useContext(AuthContext);
  const [openModalLogout, setOpenModalLogout] = useState(false);

  return (
    
    <div>
      <LogoutModal open = {openModalLogout}/>
      <nav>
        <ButtonLink classes="general-button">
          Home
        </ButtonLink>
        <ButtonLink to="/about" classes="general-button">
          About
        </ButtonLink>
        <br />
        {user ? (
          <>
            <p>User: {user.username}</p>
            <button onClick = {() => setOpenModalLogout(true)}
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
