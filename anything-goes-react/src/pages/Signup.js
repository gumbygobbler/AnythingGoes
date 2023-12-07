import Validation from "../components/Validation"; //validation
import React, {useEffect, useState} from "react";
import FormData from  'form-data'

import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function HandleSubmit(event) {
    event.preventDefault();
    
    const newUserData = new FormData()
    newUserData.append('username', values.name)
    newUserData.append('password', values.password)
    newUserData.append('password2', values.password2)

    try {
      const response = fetch("http://localhost:8000/api/user/register", {
          method: "POST",
          body: newUserData
      })
      .then(res => console.log(res))
      console.log(response)
      //const createdFight = response.json();
  }   
  catch (error) {
      console.error("Error adding new fight data:", error);
  }
    
    setErrors(Validation(values, 2));

    const navigate = useNavigate();

    newUserData = new FormData();
    newUserData.append("username", values.name);
    newUserData.append("password", values.password);

    try {
      const response = fetch("http://localhost:8000/users/", {
        method: "POST",
        body: newUserData,
      }).then((res) => console.log(res));

      if (!response.ok) {
        throw new Error("Failed to add new user");
      }
    } catch (error) {
      console.error("Error adding new user data:", error);
    }

    navigate('/home');
    //}
  }

  return (
    <div style={{ height: "100vh" }}>
      <form onSubmit={HandleSubmit}>
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
              name="name"
              value={values.name}
              onChange={handleChange}
            ></input>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
          {/* //ButtonLink to="/home" classes="general-button"Login/ButtonLink */}
        </div>
        <div className="container" style={{ justifyContent: "center" }}>
          <span className="psw">
            Returning User?<a href="/Signup">Login!</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
