import LoginUser from "../components/LoginUser";
import LoginPass from "../components/LoginPass";
import RegUser from "../components/RegUser";
import RegPass from "../components/RegPass";
import Button from "../components/Button";
import React from "react";

function Login() {
  const test = "test";
  return (
    <>
    <main>
      <div>
        <h1 style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>Returning User:</h1>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
        <p>Username:</p>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
      <LoginUser children={test}></LoginUser>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
        <p>Password:</p>
      </div>
      <div  style={{paddingLeft : 350, paddingRight: 350}}>
      <LoginPass children={test}></LoginPass>
      </div>
      <div style={{paddingLeft : 550, paddingRight: 550}}>
      <Button color="primary">CLICK ME TO LOGIN</Button>
      </div>
      <div>
        <h1 style={{color: 'red', fontWeight: 'bold', textAlign: 'center'}}>New User:</h1>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
        <p>New Username:</p>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
      <RegUser children={test}></RegUser>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
        <p>New Password:</p>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
      <RegPass children={test}></RegPass>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
        <p>Confirm Password:</p>
      </div>
      <div style={{paddingLeft : 350, paddingRight: 350}}>
      <RegPass children={test}></RegPass>
      </div>
      <div style={{paddingLeft : 550, paddingRight: 550}} >
      <Button color="primary">CLICK ME TO SIGN UP</Button>
      </div>
    </main>
    </>
  );
}
export default Login;
