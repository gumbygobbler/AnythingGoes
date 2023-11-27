import React from "react";
import "../styles.css";


const FightScreen = ({fighter1, fighter2}) => {
    var percent = 500 * fighter1.votes/(fighter1.votes + fighter2.votes)
    return (
        <div>
            <div className="fight-page-images">
        <div className="col-md-4">
          <div className="thumbnail">
              <img className = "fight-screen-fighter-image" src={fighter1.image} alt={fighter1.name}/>
              <button className="general-button"> Vote For Image 1 </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
              <img className = "fight-screen-fighter-image" src={fighter2.image} alt={fighter2.name}/>
              <button className="general-button"> Vote For Image 2 </button>
          </div>
        </div>
      </div>    
      

      <div class = "blue-bar" style = {{width:500}}>
        <div class = "red-bar" style = {{width:percent}}> </div>
    </div>
        </div>
    )
}

export default FightScreen;