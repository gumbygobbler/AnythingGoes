import Validation from "../components/Validation"; //validation
import React, { useEffect, useState, useContext } from "react";
import FormData from "form-data";
import "./pages.css";


//import AuthContext from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

import { Link, Navigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

function Signup() {
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [values, setValues] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const [userId, setUserId] = useState(0);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    
   const newUserData = new FormData()
    newUserData.append('username', values.name)
    newUserData.append('password', values.password)
    newUserData.append('password2', values.password2)


    setErrors(Validation(values, 2));

    if (Object.keys(errors).length === 0) {
      console.log("No errors detected");
      const newUserData = new FormData();
      newUserData.append("username", values.username);
      newUserData.append("password", values.password);
      newUserData.append("password2", values.password2);

      const newManagerData = new FormData();
      newManagerData.append("name", values.username);

      console.log(values.name);
      //POST for User Data
      try {
        const response = fetch("http://localhost:8000/api/user/register", {
          method: "POST",
          body: newUserData,
        })
          .then((response) => {
            console.log(response);
            // Assuming loginUser and setUserId return promises
            return response.json();
          })
          // .then((userData) => {
          //   console.log("User data: ", userData);
          //   return Promise.all([
          //     setUserId(userData),
          //     newManagerData.append("userId", userId.userId),
          //   ]);
          // })
          .then(async (event) => {
            // console.log("Form Submitted");
            let responseLogin = await fetch(
              "http://127.0.0.1:8000/api/token/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: values.username,
                  password: values.password,
                }),
              }
            );
            let data = await responseLogin.json();
            console.log("data: ", data);
            console.log("response: ", responseLogin);
            if ((await responseLogin.status) === 200) {
              setAuthTokens(data);
              const decodedData = jwtDecode(data.access);
              setUser(decodedData);
              localStorage.setItem("authTokens", JSON.stringify(data));
              localStorage.setItem("Username", user);
              console.log("decoded data: ", user);
            } else {
              alert("Failed to fetch user data");
            }
          })
          .then(() => {
            setUserId(user.user_id);
            newManagerData.append("userId", user.user_id);
            for (const pair of newManagerData.entries()) {
              console.log(pair[0] + "," + pair[1]);
            }
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
                fontWeight: "bold", 
                textShadow: "0px 2px 6px rgba(179, 147, 211, 0.8)"
                
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
              name="username"
              value={values.username}
              onChange={handleChange}
              width="100%"
            ></input>
            {errors.username && (
              <p style={{ color: "#ff3333" }}>{errors.username}</p>
            )}
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
          <Button style={{padding: "15px", 
                          color: "#c9a7d5", 
                          fontWeight: "bold", 
                          fontSize: "20px",
                          textShadow: "0px 1px 3px rgba(179, 147, 211, 0.8)"}} 
                          type="submit" 
                          variant="outline-light" 
                          className="my-3 w-100">
              Sign Up
            </Button>
          </div>
          {/* //ButtonLink to="/home" classes="general-button"Login/ButtonLink */}
              
          <br>
          </br>
          <br />

          <span style={{textAlign: "center", color: "lightgray"}}>
            Returning User? <a style={{color: "#c9a7d5", textShadow: "0px 1px 3px rgba(179, 147, 211, 0.8)"}} href="/Login">Login!</a></span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
