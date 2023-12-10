import Validation from "../components/Validation"; //validation
import React, { useEffect, useState, useContext } from "react";
import FormData from "form-data";

import AuthContext from "../context/AuthContext";

import { Link, Navigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

function Signup() {
  let { user, loginUser } = useContext(AuthContext);

  const [values, setValues] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const [userId, setUserId] = useState(null);

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setErrors(Validation(values, 2));

    if (Object.keys(errors).length === 0) {
      console.log("No errors detected");
      const newUserData = new FormData();
      newUserData.append("username", values.username);
      newUserData.append("password", values.password);
      newUserData.append("password2", values.password2);

      const newManagerData = new FormData();
      newManagerData.append("name", values.name);

      console.log(values.name);
      //POST for User Data
      try {
        const response = fetch("http://localhost:8000/api/user/register", {
          method: "POST",
          body: newUserData,
        })
          .then((res) => {
            console.log(res);
            // Assuming loginUser and setUserId return promises
            return Promise.all(
              [loginUser(event), setUserId(user.user_id)],
              newManagerData.append("userId", user.user_id)
            );
          })
          .then(() => {
            // This block will be executed after loginUser and setUserId are complete
            console.log("User registration, login, and ID setting complete");
          })
          .then((secondResponse) => {
            try {
              const secondResponse = fetch("http://localhost:8000/managers", {
                method: "POST",
                body: newManagerData,
              }).then((res) => console.log(res));
              console.log(secondResponse);
              //const createdFight = response.json();
            } catch (error) {
              console.error("Error adding new manager data:", error);
            }
          })
          .catch((error) => {
            console.error("Error adding new user data:", error);
          });
      } catch (error) {
        console.error("Error in try-catch block:", error);
      }
      //     .then((res) => console.log(res))
      //     .then(loginUser(event))
      //     .then(setUserId(user.user_id));
      //   console.log(response);
      // } catch (error) {
      //   console.error("Error adding new user data:", error);
      // }
    }
  }

  return (
    <div style={{ height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <div
          className="container login-box d-flex flex-column justify-content-center mt-5"
          style={{ justifyContent: "center" }}
        >
          <div className=" d-flex flex-column justify-content-center">
            <label
              style={{
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              Username
            </label>
            <br />
            <input
              className="login-entry mt-1"
              type="text"
              placeholder="Enter Username"
              name="username"
              value={values.username}
              onChange={handleChange}
            ></input>
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
          </div>
          <div className="mt-4 d-flex flex-column justify-content-center">
            <label
              className="text-center"
              style={{
                fontSize: "24px",
              }}
            >
              Password
            </label>
            <br />
            <input
              className="login-entry mt-1"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            ></input>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <br />
            <input
              className="login-entry mt-1"
              type="password"
              placeholder="Enter Password Again"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            ></input>
            {errors.password2 && (
              <p style={{ color: "red" }}>{errors.password2}</p>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <Button
              className="login-button mt-5 mb-2"
              type="submit"
              variant="outline-light"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className="container" style={{ justifyContent: "center" }}>
          <span className="psw">
            Returning User?{" "}
            <Link to="/login">
              <a>Login!</a>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
