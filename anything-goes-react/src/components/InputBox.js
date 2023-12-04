import React from "react";
import { useState, useEffect } from "react";
import FormData from "form-data";

//Current fighter Id on launch of site
let fighterURL = "";
function InputBox() {
  const [fighterImage, setFighterImage] = useState();
  const [fighter, setFighter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (fighter || fighterImage === "") {
    //   alert("Please enter both an image and a name for the fighter." + fighter + fighterImage);
    // } else {

    const newFightData = new FormData();
    newFightData.append("name", fighter);
    newFightData.append("manager", "burt");
    newFightData.append("fighterImg", fighterImage);

    try {
      const response = fetch("http://localhost:8000/fighters/", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(newFightData),
        body: newFightData,
      }).then((res) => console.log(res));

      if (!response.ok) {
        throw new Error("Failed to add new fight");
      }

      const createdFight = response.json();
    } catch (error) {
      console.error("Error adding new fight data:", error);
      console.log(fighterImage);
    }
    //}
  };

  function handleChange(e) {
    console.log(e.target.files[0]);
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
