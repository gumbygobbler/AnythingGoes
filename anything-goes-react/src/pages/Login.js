import Validation from "../components/Validation"; //validation
import React, { useEffect, useState } from "react";

import { Button, Container } from "react-bootstrap";

function Login() {
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
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ justifyContent: "center" }}>
          <label
            style={{
              color: "rgb(200,200,200)",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "49px",
            }}
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            value={values.name}
            onChange={handleChange}
          ></input>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          <label
            style={{
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "49px",
            }}
          >
            password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

          <Button type="submit" variant="outline-light">
            Login
          </Button>
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
