import React from "react";
import { useState, useEffect } from "react";

//Current fighter Id on launch of site

function InputBox() {
  const [fighterImage, setFighterImage] = useState("");
  const [fighter, setFighter] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (fighter || fighterImage === "") {
    //   alert("Please enter both an image and a name for the fighter." + fighter + fighterImage);
    // } else {
      const newFightData = {
        "name": fighter,
        "manager": "burt",
        "fighterImg": fighterImage
      };
      try {
        const response = fetch("http://localhost:3001/fighters/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFightData),
        });

        if (!response.ok) {
          throw new Error("Failed to add new fight");
        }

        const createdFight = response.json();
      } catch (error) {
        console.error("Error adding new fight data:", error);
      }
    //}
  };

  function handleChange(e) {
    console.log(e.target.files);
    setFighterImage(URL.createObjectURL(e.target.files[0]));
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
          src={fighterImage}
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
