// import { ReactNode } from "react";

const LoginUser = ({ children }) => {
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
