import React from "react";
import { useState, useEffect, useContext } from "react";
import FormData from "form-data";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

//Current fighter Id on launch of site
let fighterURL = "";

function InputBox() {
  const [fighterImage, setFighterImage] = useState();
  const [fighter, setFighter] = useState({});
  const [fightData, setFightData] = useState({
    fighterName: "",
    fighterImage: "",
  });

  let { user } = useContext(AuthContext);

  function GenerateFight(fighter1Id) {
    //GET fighters and check length of the array
    //If 0, then do nothing and send to page saying there's no other fighters
    //Else, get a random id from the length of fighters and POST a fight with both IDs
    //Return to home after this
    console.log("Fight Generated with id as fighterId1: ", fighter1Id);

    //Fetch the fights data
    const response = fetch("http://localhost:8000/fights")
      .then((response) => response.json())
      .then((data) => setFightData(data))
      .catch((error) => console.error("Error fetching fights data:", error));

    console.log("GET Fight Data: ", fightData.length);
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
            const response = fetch(
              "http://localhost:8000/fighters/" + user.user_id,
              {
                method: "POST",
                body: newFighterData,
              }
            ).then((res) => console.log(res));
            console.log(response);
            //const createdFight = response.json();
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
    console.log(user.user_id);
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
