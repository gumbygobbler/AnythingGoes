import React from "react";
import { useState, useEffect, useContext } from "react";
import FormData from "form-data";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

//Current fighter Id on launch of site
let fighterURL = "";

function InputBox() {
  const [currentFighter, setCurrentFighter] = useState([]);
  const [secondFighter, setSecondFighter] = useState([]);
  const [newFight, setNewFight] = useState([]);

  const [fighterImage, setFighterImage] = useState();
  const [fighter, setFighter] = useState();
  const [fighterData, setFighterData] = useState([]);

  let { user } = useContext(AuthContext);

  function GenerateFight() {
    //GET fighters and check length of the array
    //If 0, then do nothing and send to page saying there's no other fighters
    //Else, get a random id from the length of fighters and POST a fight with both IDs
    //Return to home after this
    console.log("Fight Generating");

    //Fetch the fights data
    //Fight ID 5 is our IDLE Fight
    const response = fetch("http://localhost:8000/fighters/fights/" + 5)
      .then((response) => response.json())
      .then((data) => setFighterData(data))
      .then(console.log("GET Fight Data: ", fighterData.length))
      .then(() => {
        if (fighterData.length < 2) {
          console.log("Do nothing");
          //Do nothing if there are not enough fighters
          return;
        } else {
          try {
            fetch(
              //GET Current Fighter Data
              "http://localhost:8000/fighters/current-fighter/" + user.user_id
            )
              .then((response) => response.json())
              .then((data) => setCurrentFighter(data))
              .then((response) => {
                //GET Second Fighter Data
                fetch(
                  "http://localhost:8000/fighters/second-fighter/" +
                    user.user_id
                )
                  .then((response) => response.json())
                  .then((data) => setSecondFighter(data))
                  .then(() => {
                    //Create the new name for the fight
                    const newFightName = `${currentFighter.name} Vs. ${secondFighter.name}`;
                    const newFightData = new FormData();
                    newFightData.append("name", newFightName);
                    //POST a new fight
                    fetch("http://localhost:8000/fights/new-fight/", {
                      method: "POST",
                      body: newFightData,
                    })
                      .then((response) => response.json())
                      .then();
                    //GET that new fight and get the id
                    //PUT that new fight id into current fighter
                    //PUU that new fight id into second fighter
                  });
              });
          } catch (error) {
            console.error("Error trying to select fighters");
          }
        }
      })
      .catch((error) => console.error("Error fetching fights data:", error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (fighter || fighterImage === "") {
    //   alert(
    //     "Please enter both an image and a name for the fighter." +
    //       fighter +
    //       fighterImage
    //   );
    // } else {

    const newFighterData = new FormData();
    newFighterData.append("name", fighter);
    newFighterData.append("manager", user.userid);
    newFighterData.append("fight", 5);
    newFighterData.append("fighterImg", fighterImage);
    console.log(fighter);
    console.log(fighterImage);

    try {
      fetch("http://localhost:8000/managers/" + user.user_id)
        .then((response) => response.json())
        .then((data) => {
          newFighterData.append("manager", data.id);
          try {
            //POST new fighter data
            const response = fetch(
              "http://localhost:8000/fighters/" + user.user_id,
              {
                method: "POST",
                body: newFighterData,
              }
            )
              .then((response) => {
                console.log(response);
              })
              .then(GenerateFight());
          } catch (error) {
            console.error("Error adding new fighter data:", error);
          }
        });
    } catch (error) {
      console.error("Error searching for manager");
    }
  };

  //   try {
  //     const response = fetch("http://localhost:8000/fighters/", {
  //       method: "POST",
  //       body: newFightData
  //     }).then(res => console.log(res))
  //     console.log(response)
  //     const createdFight = response.json();
  //   }
  //   catch (error) {
  //     console.error("Error adding new fight data:", error);
  //   }
  // };

  function handleChange(e) {
    console.log(user.use_id);
    if (e.target.files[0] != null) setFighterImage(e.target.files[0]);
    fighterURL = URL.createObjectURL(e.target.files[0]);
  }

  return (
    <div id="inputBox">
      <h1>What does your fighter look like?</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fighter">Select An Image</label>
        <br></br>
        <br></br>
        <img
          id="fighterImage"
          src={fighterURL}
          style={{ width: "100%" }}
          alt=""
        ></img>
        <br></br>
        <br></br>
        <input
          type="file"
          id="fighter"
          name="fighter"
          accept="image/*"
          onChange={handleChange}
          encType="multipart/form-data"
        />
        <br></br>
        <br></br>
        <label htmlFor="fighterName">What is the name of your fighter?</label>
        <br></br>
        <br></br>
        <input
          type="text"
          id="fighterName"
          name="fighterName"
          value={fighter}
          onChange={(e) => setFighter(e.target.value)}
        />

        <br></br>
        <br></br>
        <input id="submit" type="submit" value="QUEUE THEM IN THE RING!" />
      </form>
    </div>
  );
}

export default InputBox;
