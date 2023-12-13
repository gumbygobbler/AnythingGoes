import Validation from "../components/Validation"; //validation
import React, { useEffect, useState, useContext } from "react";

import { Button, Container } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import "./pages.css";

function Support() {
  return (
    <div
      
      style={{ height: "100vh" }}
    >
      <form>
        
        <div className="container border border-white login-box d-flex flex-column justify-content-center mt-5 w-75 text-white ">
          
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
              
              Anything Goes Support
            </label>
            <br />
            
            <label
              style={{
                color: "lightgray",
                textAlign: "center",
                fontSize: "28px",
                justifyContent: "center",
                fontWeight: "bold"
                
              }}
            >
              
              If you need any help, please contact us using the form below.
            </label>
            <br />
            <div>
            <input
              className="supportfield"
              type="text"
              placeholder="Name"
              style={{width: "30%"}}
            ></input>
            <div style={{
              width: "10%",
              display: "inline-block"
            }}></div>
            <input
              className="supportfield"
              type="email"
              placeholder="E-mail"
              style={{width: "60%"}}
            ></input>
            </div>
            
          </div>
          <div style={{height: "4px"}}></div>
          <div className=" d-flex flex-column justify-content-center" style={{justifyContent: "center", textAlign: "center"}}>
          <textarea
              className="supportfield"
              rows="5"
              placeholder="Please enter the details here"
              style={{width: "100%", resize: "none", rows: "10"}}
            ></textarea>  
          </div>
          
          <div className="d-flex justify-content-center">
            <Button style={{padding: "15px", color: "#c9a7d5", fontWeight: "bold", fontSize: "20px"}}type="submit" variant="outline-light" className="my-3 w-100">
              Submit
            </Button>
          </div>

        
          <br>
          </br>
          <br />

          <span style={{textAlign: "center", color: "lightgray"}}>
            <a style={{color: "#c9a7d5"}} href="/Home">Return Home</a></span> 
        </div>
      </form>
    </div>
    
  );
}

export default Support;
