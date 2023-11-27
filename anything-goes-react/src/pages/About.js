import React from 'react'
import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faLightbulb, faPeopleGroup, faRobot} from '@fortawesome/free-solid-svg-icons'


const About = () => {
  return (
    
    <div>
      <section class="aboutPage">
        <div class="aboutHeader">
          <h1>About Page</h1>
          <p>Learn about Anything Goes!</p>
        </div>
        <div class="elementsContainer">
          <div class="elementIcon">
            <FontAwesomeIcon icon={faPeopleGroup} style = {{fontSize:"36px", padding:"5px", color:"rgb(130, 39, 163)"}}/>
            <div class= "elementInfo">
              <h2>Who We Are</h2>
              <p>Anything Goes was created by a group of friends who sought to combine creativity and entertainment. We are a group of undergraduate computer engineers who were looking to have some competitive fun.</p>
            </div>
          </div>


          <div class="elementIcon">
            <FontAwesomeIcon icon={faRobot} style = {{fontSize:"36px", padding:"5px", color:"rgb(130, 39, 163)"}}/>
            <div class= "elementInfo">
              <h2>Functionality</h2>
              <p>We have created a virtual arena where you can upload your favorite “fighters” (in the form of any image from your gallery) to brawl against users all around the web. As this entertainment happens in real-time, the users watching will decide the winners by votes on the match floor. </p>
            </div>
          </div>

          <div class="elementIcon">
            <FontAwesomeIcon icon={faCircleUser} style = {{fontSize:"36px", padding:"5px", color:"rgb(130, 39, 163)"}}/>
            <div class= "elementInfo">
              <h2>User Friendly</h2>
              <p>We strived to make a website personal to each user as well as one that draws other users in, even if they do not want to compete. This website is made to emphasize users’ opinions and create a safe friendly environment for all ages.</p>
            </div>
          </div>

          <div class="elementIcon">
            <FontAwesomeIcon icon={faLightbulb} style = {{fontSize:"36px", padding:"5px", color:"rgb(130, 39, 163)"}}/>
            <div class= "elementInfo">
              <h2>Aspirations</h2>
              <p>Made to work best on desktop computers and laptops, our website is friendly to all different types of people. Our hope is to promote user engagement that creates a retention rate, such as chatting with streamers and other users in real-time.
</p>
            </div>
          </div>
        </div>
        </section>

    </div>
  )
}

export default About


