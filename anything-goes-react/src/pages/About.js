import React, { useState } from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faLightbulb,
  faPeopleGroup,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import AboutModalBrent from "../components/AboutModalBrent";
import AboutModalAaron from "../components/AboutModalAaron";
import AboutModalBryan from "../components/AboutModalBryan";
import AboutModalAndrew from "../components/AboutModalAndrew";
import AboutModalKaia from "../components/AboutModalKaia";

const profilePicture = {
  "Aaron": 'https://media.discordapp.net/attachments/1169434139771019347/1180957688818049084/IMG_8057.png?ex=657f4f8e&is=656cda8e&hm=2da15627e28be3b699750aca194694f9407bb05f735b9e59595d71c978d12bdb&=&width=557&height=670',
  "Brent": 'https://cdn.discordapp.com/attachments/1169434139771019347/1180957690101510144/IMG_8059.png?ex=657f4f8e&is=656cda8e&hm=0f60ca5a5c9447822268d85b4fabafb82a7667ccbbcd87450a1fa08696900c84&',
  "Bryan": 'https://media.discordapp.net/attachments/1169434139771019347/1180957689203929198/IMG_8058.png?ex=657f4f8e&is=656cda8e&hm=f971347ba77b2fd09c1a677c1ee2e2651e590221af2f9e01d991fb8cbedd07df&=&width=555&height=670',
  "Andrew": 'https://cdn.discordapp.com/attachments/1169434139771019347/1180957689623367781/IMG_8060.png?ex=657f4f8e&is=656cda8e&hm=7262dd7f7beac2a541943138b9d50d8628f860326e3ef824dcd2d8ac2d6725e0&',
  "Kaia": 'https://cdn.discordapp.com/attachments/772358194994610176/1182104209777242132/bruh_1.jpg?ex=65837b56&is=65710656&hm=1b312896cc3c56a8691c005c2471ff9e73a99bb125e9f49a12e71f75e4c524db&'
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
            <img
              className="about-modal-image-button"
              onClick={() => setOpenModalBrent(true)}
              src={profilePicture.Brent}
            />
            <AboutModalBrent
              open={openModalBrent}
              close={() => setOpenModalBrent(false)}
            />
          </div>

          <div>
            <img
              className="about-modal-image-button"
              onClick={() => setOpenModalAaron(true)}
              src={profilePicture.Aaron}
            />
            <AboutModalAaron
              open={openModalAaron}
              close={() => setOpenModalAaron(false)}
            />
          </div>

          <div>
            <img
              className="about-modal-image-button"
              onClick={() => setOpenModalBryan(true)}
              src={profilePicture.Bryan}
            />
            <AboutModalBryan
              open={openModalBryan}
              close={() => setOpenModalBryan(false)}
            />
          </div>

          <div>
            <img
              className="about-modal-image-button"
              onClick={() => setOpenModalAndrew(true)}
              src={profilePicture.Andrew}
            />
            <AboutModalAndrew
              open={openModalAndrew}
              close={() => setOpenModalAndrew(false)}
            />
          </div>

          <div>
            <img
              className="about-modal-image-button"
              onClick={() => setOpenModalKaia(true)}
              src={profilePicture.Kaia}
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
