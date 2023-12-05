import React from "react";
import "../styles.css";
import left from '../left.png';
import right from '../right.png';



const Logo = () => {
    return (
      <>
      <div className = "logoContainer">
        <div className="leftFight">
            <img src = {left} alt=" "/>
        </div>
        
        <div>

            <button className= "backToHomeBtn">Let the Fights Begin</button>

        </div>
        
        <div className="rightFight">
            <img src = {right} alt=" "/>
            </div>
      </div>
      </>
    );
  };
  
  export default Logo;