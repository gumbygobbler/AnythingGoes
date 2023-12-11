import Validation from "../components/Validation"; //validation
import React, {useEffect, useState} from "react";
import FormData from  'form-data'
import "./pages.css";

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
      <div className="container border border-white login-box d-flex flex-column justify-content-center mt-5 w-50 text-white ">
          
      <div className=" d-flex flex-column justify-content-center">
            <br></br>
            
            <label
              style={{
                color: "#c9a7d5",
                textAlign: "center",
                fontSize: "60px",
                justifyContent: "center",
                fontWeight: "bold"
                
              }}
            >
              
              Anything Goes Registration
            </label>
            <br />
            <br />
            <br></br>
            <input
              className="bgfield"          
              type="text"
              placeholder="Enter Username"
              name="name"
              value={values.name}
              onChange={handleChange}
              width="100%"
            ></input>
            {errors.name && <p style={{ color: "#ff3333" }}>{errors.name}</p>}
          </div>
          <div style={{height: "4px"}}></div>
          <div className=" d-flex flex-column justify-content-center">
          
            {/* <label
              className="text-center"
              style={{
                fontSize: "24px",
              }}
            >
              Password
            </label>
            <br /> */}
            <input
              className="bgfield"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              width="100%"
            ></input>
            {errors.password && (
              <p style={{ color: "#ff3333" }}>{errors.password}</p>
            )}
            <div style={{height: "4px"}}></div>
            <input
              className="bgfield"
              type="password"
              placeholder="Enter Password Again"
              name="password2"
              value={values.password2}
              onChange={handleChange}
              width="100%"
            ></input>
            {errors.password2 && (
              <p style={{ color: "#ff3333" }}>{errors.password2}</p>
            )}
          </div>
          <div className="d-flex justify-content-center">
          <Button style={{padding: "15px", color: "#c9a7d5", fontWeight: "bold", fontSize: "20px"}} type="submit" variant="outline-light" className="my-3 w-100">
              Sign Up
            </Button>
          </div>
          {/* //ButtonLink to="/home" classes="general-button"Login/ButtonLink */}
              
          <br>
          </br>
          <br />

          <span style={{textAlign: "center", color: "lightgray"}}>
            Returning User? <a style={{color: "#c9a7d5"}} href="/Login">Login!</a></span>
          
        </div>
      </form>
    </div>
  );
}

export default Signup;
