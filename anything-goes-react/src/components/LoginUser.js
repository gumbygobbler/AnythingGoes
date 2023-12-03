// import { ReactNode } from "react";

const LoginUser = ({uid, utext, logregstate, namepasskeystate}) => {
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder = {"Enter your " + namepasskeystate}
          uid = {uid}
          logregstate = {logregstate}
        >{utext}</input>
        <p>namepasskey = {namepasskeystate}</p>
        <p>logrestate = {logregstate}</p>
        <p>this is uid . uid = {uid}</p>
        <p>this is utext. utext = {utext}</p>
      </div>
      
    );

    
  };
  
export default LoginUser;

