// import { ReactNode } from "react";

interface Props {
    children: string; //ReactNode;
  }
  
  const LoginPass = ({ children }: Props) => {
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="placeholder"
          placeholder="Enter your password"
        ></input>
      </div>
    );
  };
  
  export default LoginPass;
  