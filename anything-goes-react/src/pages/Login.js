import Validation from "../components/Validation"; //validation
import React, { useEffect, useState, useContext } from "react";

import { Button, Container } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

function Login() {
  let { loginUser } = useContext(AuthContext);

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(Validation(values, 1));
  }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.name !== "" &&
      values.name !== ""
    ) {
      alert("form submitted"); //logic goes here for sending to db
    }
  }, [errors]);

  return (
    <div
      className="mt-5 d-flex justify-content-center"
      style={{ height: "900px" }}
    >
      <form onSubmit={loginUser}>
        <div className="container login-box">
          <div>
            <label
              style={{
                color: "rgb(200,200,200)",
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              Username
            </label>
            <input
              className="login-entry"
              type="text"
              placeholder="Enter Username"
              name="username"
              value={values.username}
              onChange={handleChange}
            ></input>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
          <br />
          <div>
            <label
              style={{
                color: "rgb(200,200,200)",
                textAlign: "center",
                fontSize: "28px",
              }}
            >
              Password
            </label>
            <input
              className="login-entry"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            ></input>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <br />
          <div className="d-flex justify-content-center mt-5">
            <Button type="submit" variant="outline-light">
              Login
            </Button>
          </div>
          {/* //ButtonLink to="/home" classes="general-button"Login/ButtonLink */}
        </div>
        <div className="container" style={{ justifyContent: "center" }}>
          <span className="psw">
            Not a User?<a href="/Signup">Sign Up!</a>
          </span>
        </div>
      </form>
    </div>
  );
}

// function Login() {
//   const test = "test";

//   //boolean

//   const userAccounts = [];
//   userAccounts.push([1, "user1", "somePassword"]); //admin

//   return (
//     <>
//       <main className="container" style={{ justifyContent: "center" }}>

//       {/* <ButtonLink to="/about" classes="general-button">
//           About
//         </ButtonLink> */}
//       {/* const ButtonLink = ({ uID , uname, pword }) => {
//   return (
//     <Link style={{ textDecoration: "none" }} to={to}>
//       <button type="button" className={classes}>
//         {children}
//       </button>
//     </Link>
//   );
// }; */}

export default Login;
