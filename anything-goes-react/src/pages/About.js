import React, { useState } from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faLightbulb,
  faPeopleGroup,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import Image from 'react-bootstrap/Image';
import AboutModalBrent from "../components/AboutModalBrent";
import AboutModalAaron from "../components/AboutModalAaron";
import AboutModalBryan from "../components/AboutModalBryan";
import AboutModalAndrew from "../components/AboutModalAndrew";
import AboutModalKaia from "../components/AboutModalKaia";
import LogoutModal from "../components/LogoutModal";

const profilePicture = {
  "Aaron": 'https://media.licdn.com/dms/image/C4D03AQFXKNNz0EvbqQ/profile-displayphoto-shrink_400_400/0/1620264094067?e=1707955200&v=beta&t=Y69vwm2zSVlLhKIzX5_Cik2RCp7SFE0vu2qN5UE71Vo',
  "Brent": 'https://media.licdn.com/dms/image/C4E03AQFwh5oOL_-epw/profile-displayphoto-shrink_400_400/0/1662750917369?e=1707955200&v=beta&t=0YnRJ55e7jMdv_0oH25R1hlvXzkLhGQqTonqo306374',
  "Bryan": 'https://media.licdn.com/dms/image/D5603AQGbY4AJ4Ver7A/profile-displayphoto-shrink_400_400/0/1685167913689?e=1707955200&v=beta&t=sI3WgPGY74gIMLjLhQUjmHB7U0bLN02_wqbnDg5XYWY',
  "Andrew": 'https://media.licdn.com/dms/image/D5603AQHACQ2AZNlzdQ/profile-displayphoto-shrink_400_400/0/1692827825796?e=1707955200&v=beta&t=Zf3lSg1NXGA9fJvWk5kT_oSGvp3tG69noOLfKxzgfC0',
  "Kaia": 'https://media.licdn.com/dms/image/D4D35AQGKFKlhPOxKaQ/profile-framedphoto-shrink_400_400/0/1690328350248?e=1702821600&v=beta&t=MsDXtWqdoXpUdFsHCG5wW51DqBK2tU_Pv2OJqoZwmls'
}




function About() {
  const [openModalBrent, setOpenModalBrent] = useState(false);
  const [openModalAaron, setOpenModalAaron] = useState(false);
  const [openModalBryan, setOpenModalBryan] = useState(false);
  const [openModalAndrew, setOpenModalAndrew] = useState(false);
  const [openModalKaia, setOpenModalKaia] = useState(false);
  return (
    
    <div>
      <section className="container about-page">
        <div className="aboutHeader">
          <h1>About Page</h1>
          <p>Learn about Anything Goes!</p>
        </div>
        <div class="elementsContainer">
          <div class="elementIcon">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              style={{
                fontSize: "36px",
                padding: "5px",
                color: "rgb(130, 39, 163)",
              }}
            />
            <div className="elementInfo">
              <h2>Who We Are</h2>
              <p>
                Anything Goes was created by a group of friends who sought to
                combine creativity and entertainment. We are a group of
                undergraduate computer engineers who were looking to have some
                competitive fun.
              </p>
            </div>
          </div>

          <div className="elementIcon">
            <FontAwesomeIcon
              icon={faRobot}
              style={{
                fontSize: "36px",
                padding: "5px",
                color: "rgb(130, 39, 163)",
              }}
            />
            <div className="elementInfo">
              <h2>Functionality</h2>
              <p>
                We have created a virtual arena where you can upload your
                favorite “fighters” (in the form of any image from your gallery)
                to brawl against users all around the web. As this entertainment
                happens in real-time, the users watching will decide the winners
                by votes on the match floor.{" "}
              </p>
            </div>
          </div>

          <div className="elementIcon">
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{
                fontSize: "36px",
                padding: "5px",
                color: "rgb(130, 39, 163)",
              }}
            />
            <div className="elementInfo">
              <h2>User Friendly</h2>
              <p>
                We strived to make a website personal to each user as well as
                one that draws other users in, even if they do not want to
                compete. This website is made to emphasize users’ opinions and
                create a safe friendly environment for all ages.
              </p>
            </div>
          </div>

          <div className="elementIcon">
            <FontAwesomeIcon
              icon={faLightbulb}
              style={{
                fontSize: "36px",
                padding: "5px",
                color: "rgb(130, 39, 163)",
              }}
            />
            <div className="elementInfo">
              <h2>Aspirations</h2>
              <p>
                Made to work best on desktop computers and laptops, our website
                is friendly to all different types of people. Our hope is to
                promote user engagement that creates a retention rate, such as
                chatting with streamers and other users in real-time.
              </p>
            </div>
          </div>
        </div>

        <div className="fight-page-images">
          <div>
            <Image
              className="about-modal-image-button"
              onClick={() => setOpenModalBrent(true)}
              src={profilePicture.Brent}
              roundedCircle
            />
            <AboutModalBrent
              open={openModalBrent}
              close={() => setOpenModalBrent(false)}
            />
          </div>

          <div>
            <Image 
              src={profilePicture.Aaron}
              roundedCircle
              onClick={() => setOpenModalAaron(true)}
              className="about-modal-image-button"
               />
            <AboutModalAaron
              open={openModalAaron}
              close={() => setOpenModalAaron(false)}
            />

          </div>

          <div>
            <Image
              className="about-modal-image-button"
              onClick={() => setOpenModalBryan(true)}
              src={profilePicture.Bryan}
              roundedCircle
            />
            <AboutModalBryan
              open={openModalBryan}
              close={() => setOpenModalBryan(false)}
            />
          </div>

          <div>
            <Image
              className="about-modal-image-button"
              onClick={() => setOpenModalAndrew(true)}
              src={profilePicture.Andrew}
              roundedCircle
            />
            <AboutModalAndrew
              open={openModalAndrew}
              close={() => setOpenModalAndrew(false)}
            />
          </div>

          <div>
            <Image
              className="about-modal-image-button"
              onClick={() => setOpenModalKaia(true)}
              src={profilePicture.Kaia}
              roundedCircle
            />
            <AboutModalKaia
              open={openModalKaia}
              close={() => setOpenModalKaia(false)}
            />

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
