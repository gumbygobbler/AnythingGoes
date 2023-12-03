// import { ReactNode } from "react";

const LoginPass = ({ children }) => {
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
