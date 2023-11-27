// import { ReactNode } from "react";

interface Props {
    children: string; //ReactNode;
  }
  
  const RegPass = ({ children }: Props) => {
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
  