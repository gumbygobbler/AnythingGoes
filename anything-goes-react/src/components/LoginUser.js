// import { ReactNode } from "react";

interface Props {
    children: string; //ReactNode;
  }
  
  const LoginUser = ({ children }: Props) => {
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="placeholder"
          placeholder="Enter your username"
        ></input>
      </div>
    );
  };
  
  export default LoginUser;
  