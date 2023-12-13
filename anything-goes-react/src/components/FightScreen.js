import React from "react";
import "../styles.css";
import { useState, useEffect, useContext } from "react";
import FormData from "form-data";

const FightScreen = ({fighter1, fighter2, votes1, votes2, fightid}) => {
    
    function handleVote1(e) {
        const voteChange = new FormData();
        let newVotes1 = votes1 + 1
        voteChange.append("voteCount1", newVotes1)

        fetch("http://localhost:8000/fights" + fightid, {
            method: 'PUT',
            body: voteChange
        })
        .then((response) => {
            console.log(response);
            console.log(newVotes1);
        })
        .then(() => document.getElementById("vote1").style.display = "none")
        .catch(error => console.log(error))
    }

    function handleVote2(e) {
        const voteChange = new FormData();
        let newVotes2 = votes2 + 1
        voteChange.append("voteCount2", newVotes2)

        fetch("http://localhost:8000/fights" + fightid, {
            method: 'PUT',
            body: voteChange
        })
        .then((response) => {
            console.log(response);
            console.log(newVotes2);
        })
        .then(() => document.getElementById("vote1").style.display = "none")
        .catch(error => console.log(error))
    }
    
    var percent = 500 * votes1/(votes1 + votes2)
    
    return (
        <div>
            <h2>{fighter1.name} vs {fighter2.name}</h2>
            <div className="fight-page-images">

                
                <div>
                    <img className = "fight-screen-fighter-image" src={fighter1.fighterImg} alt={fighter1.name}/>
                    <button className="general-button" id="vote1" onclick={handleVote1}> Vote For Image 1 </button>
                </div>



                <div>
                    <img className = "fight-screen-fighter-image" src={fighter2.fighterImg} alt={fighter2.name}/>
                    <button className="general-button" id="vote2" onclick={handleVote2}> Vote For Image 2 </button>
                </div>    
            </div>
      
            <div className="winner-bar">
                <div className = "blue-bar" style = {{width:500}}>
                    <div className = "red-bar" style = {{width:420}}> </div>
                </div>
            </div>
        </div>
    )
}

export default FightScreen;