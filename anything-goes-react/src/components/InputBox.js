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

  async function UpdateFighters() {
    console.log("Updating Fighters");

    //Update currentFighter with new fight id
    const newCurrentFighterData = new FormData();
    await newCurrentFighterData.append("id", currentFighter.id);
    await newCurrentFighterData.append("name", currentFighter.name);
    await newCurrentFighterData.append("manager", currentFighter.manager);
    await newCurrentFighterData.append("fight", newFight.id);
    await newCurrentFighterData.append("fighterImg", currentFighter.fighterImg);

    //Update secondFighter with new fight id
    const newSecondFighterData = new FormData();
    await newSecondFighterData.append("id", secondFighter.id);
    await newSecondFighterData.append("name", secondFighter.name);
    await newSecondFighterData.append("manager", secondFighter.manager);
    await newSecondFighterData.append("fight", newFight.id);
    await newSecondFighterData.append("fighterImg", secondFighter.fighterImg);

    for (const value of newCurrentFighterData.values()) {
      console.log(value);
    }

    for (const value of newSecondFighterData.values()) {
      console.log(value);
    }

    // currentFighter.fight = newFight.id;
    // secondFighter.fight = newFight.id;

    // console.log(currentFighter);
    // console.log(secondFighter);

    //PUT currentfighter with new fight id
    const currentFighterResponse = await fetch(
      "http://localhost:8000/fighters/update/" + currentFighter.id,
      {
        method: "PUT",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: newCurrentFighterData,
      }
    );
    const newCurrentFighter = await currentFighterResponse.json();
    await setCurrentFighter(newCurrentFighter);
    await console.log(currentFighter);

    //PUT secondfighter with new fight id
    const secondFighterResponse = await fetch(
      "http://localhost:8000/fighters/update/" + secondFighter.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(secondFighter),
      }
    );
    const newSecondFighter = await secondFighterResponse.json();
    await setSecondFighter(newSecondFighter);
    await console.log(secondFighter);
  }

  async function GenerateFight() {
    try {
      console.log("Fight Generating");

      // Fetch the fights data
      const fightsResponse = await fetch(
        "http://localhost:8000/fighters/fights/" + 5
      );
      const fightsData = await fightsResponse.json();
      await setFighterData(fightsData);

      console.log("GET Fight Data:", fighterData.length);

      // Determine whether to just load fighter or generate fight
      if (fighterData.length < 2) {
        console.log("Do nothing");
        // Do nothing if there are not enough fighters
        return;
      } else {
        // GET Current Fighter Data
        const currentFighterResponse = await fetch(
          "http://localhost:8000/fighters/current-fighter/" + user.user_id
        );
        const currentFighterData = await currentFighterResponse.json();
        await setCurrentFighter(currentFighterData);
        console.log("Current Fighter:", currentFighter);

        // GET Second Fighter Data
        const secondFighterResponse = await fetch(
          "http://localhost:8000/fighters/second-fighter/" + user.user_id
        );
        const secondFighterData = await secondFighterResponse.json();
        await setSecondFighter(secondFighterData);
        console.log("Second Fighter:", secondFighter);

        // Function to create the fight given new details
        await CreateNewFight();
      }
    } catch (error) {
      console.error("Error in GenerateFight:", error);
    }
  }

  const CreateNewFight = async () => {
    console.log("Creating new fight.");
    try {
      // Create the new name for the fight
      const newFightName = `${currentFighter.name} Vs. ${secondFighter.name}`;
      console.log("New Fight Name:", newFightName);

      const newFightData = new FormData();
      await newFightData.append("name", newFightName);

      // POST a new fight
      const response = await fetch("http://localhost:8000/fights/new-fight/", {
        method: "POST",
        body: newFightData,
      });

      const newFightResponse = await response.json();
      console.log("New Fight Response:", newFightResponse);
    } catch (error) {
      console.error("Error in CreateNewFight:", error);
    }
    await ReadNewFight();
  };

  const ReadNewFight = async () => {
    console.log("Storing new fight data");
    try {
      // GET the newest fight and get the id
      const response = await fetch("http://localhost:8000/fights/new-fight");
      const newFightData = await response.json();
      await setNewFight(newFightData);
      console.log("New Fight Data:", newFightData);
    } catch (error) {
      console.error("Error in ReadNewFight:", error);
    }
    await UpdateFighters();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFighterData = new FormData();
    await newFighterData.append("name", fighter);
    await newFighterData.append("manager", user.userid);
    await newFighterData.append("fight", 5);
    await newFighterData.append("fighterImg", fighterImage);

    try {
      const managerResponse = await fetch(
        "http://localhost:8000/managers/" + user.user_id
      );
      const managerData = await managerResponse.json();
      await newFighterData.append("manager", managerData.id);

      const fighterResponse = await fetch(
        "http://localhost:8000/fighters/" + user.user_id,
        {
          method: "POST",
          body: newFighterData,
        }
      );

      const fighterData = await fighterResponse.json();
      await console.log(fighterData);

      await GenerateFight();
    } catch (error) {
      console.error("Error handling form submission:", error);
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
