// import { ReactNode } from "react";

const RegUser = ({ children }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        id="placeholder"
        placeholder="Enter your new username"
      ></input>
    </div>
  );
};

export default RegUser;
