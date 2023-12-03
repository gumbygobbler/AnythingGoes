import LoginUser from "../components/LoginUser";
import LoginPass from "../components/LoginPass";
import RegUser from "../components/RegUser";
import RegPass from "../components/RegPass";
import React from "react";

import Button from "react-bootstrap/Button";

function Login() {
  const test = "test";
  return (
    <>
      <main
        className="container"
        style={{ justifyContent: "center", backgroundColor: "rgb(32,32,32)" }}
      >
        <div>
          <h1
            style={{
              color: "rgb(200,200,200)",
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: 30,
            }}
          >
            Returning User:
          </h1>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <p>Username:</p>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350, marginTop: 25 }}>
          <LoginUser children={test}></LoginUser>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <p>Password:</p>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <LoginPass children={test}></LoginPass>
        </div>
        <div style={{ paddingLeft: 550, paddingRight: 550 }}>
          <Button variant="outline-light">LOGIN</Button>
        </div>
        <br />
        <div>
          <h1
            style={{
              color: "rgb(200,200,200)",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            New User:
          </h1>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <p>New Username:</p>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <RegUser children={test}></RegUser>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <p>New Password:</p>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <RegPass children={test}></RegPass>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <p>Confirm Password:</p>
        </div>
        <div style={{ paddingLeft: 350, paddingRight: 350 }}>
          <RegPass children={test}></RegPass>
        </div>
        <div style={{ paddingLeft: 550, paddingRight: 550, paddingBottom: 30 }}>
          <Button variant="outline-light">SIGN UP</Button>
        </div>
      </main>
    </>
  );
}
export default Login;
