// import { ReactNode } from "react";

const RegPass = ({ children }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        id="placeholder"
        placeholder="Enter your new password"
      ></input>
    </div>
  );
};

export default RegPass;
