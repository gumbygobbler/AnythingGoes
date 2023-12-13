import Validation from "../components/Validation"; //validation
import React, { useEffect, useState, useContext } from "react";

import { Button, Container } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import "./pages.css";

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
      // className="mt-5 d-flex justify-content-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={loginUser}>
        
        <div className="container border border-white login-box d-flex flex-column justify-content-center mt-5 w-50 text-white ">
          
            <div className=" d-flex flex-column justify-content-center">
            <br></br>
            
            <label
              style={{
                color: "#c9a7d5",
                textAlign: "center",
                fontSize: "60px",
                justifyContent: "center",
                fontWeight: "bold",
                textShadow: "0px 2px 6px rgba(179, 147, 211, 0.8)"
              
              }}
            >
              
              Anything Goes Login
            </label>
            <br />
            <br />
            <br></br>
            
            <input
              className="bgfield"
              type="text"
              placeholder="Enter Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              width="100%"
            ></input>
            
            {errors.name && <p style={{ color: "#ff3333" }}>{errors.name}</p>}
            
          </div>
          <div style={{height: "4px"}}></div>
          <div className=" d-flex flex-column justify-content-center" style={{justifyContent: "center", textAlign: "center"}}>
            
          
            {/* <label
              style={{
                color: "rgb(200,200,200)",
                textAlign: "center",
                fontSize: "24px",
                textShadow: "0px 4px 10px rgba(179, 147, 211, 0.8)"
              }}
            >
              Password
            </label>
             */}
            <input
              // className="login-entry"
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
          </div>
          
          <div className="d-flex justify-content-center">
            <Button style={{padding: "15px", 
                            color: "#c9a7d5", 
                            fontWeight: "bold", 
                            fontSize: "20px",
                            textShadow: "0px 1px 3px rgba(179, 147, 211, 0.8)"}}
                            type="submit" 
                            variant="outline-light" 
                            className="my-3 w-100">
              Login
            </Button>
          </div>
          {/* //ButtonLink to="/home" classes="general-button"Login/ButtonLink */}
        
          <br>
          </br>
          <br />

          <span style={{textAlign: "center", color: "lightgray"}}>
            Not a User? <a style={{color: "#c9a7d5", textShadow: "0px 1px 3px rgba(179, 147, 211, 0.8)"}} href="/Signup">Sign Up!</a></span>
          
        </div>
        
      </form>
    </div>
    
  );
}

export default Login;

