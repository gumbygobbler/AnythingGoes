const About = () => {

  const container = {
    color: "purple",
    size: "20px",
    display: "grid",
    padding: "30px"
    //grid-template-rows: 1fr 20px
  }

  return (
      <>
      <div style = {container}>
        <h1>About Page</h1>
        <h2>Who We Are</h2>
        <div>
        <p1>
          Mission Statement: A group of friends comes together to combine 
          creativity and entertainment. We wanted to make a website personal to each user but also one that draws other users in even if they do not want to compete. This website is made to emphasize users’ opinions and create a safe friendly environment for all ages.
        </p1>
        
        <h3>How Our Website Works</h3>
        <p2>
        We have created a virtual arena where you can upload your favorite “fighters” (in the form of any image from your gallery) to brawl against users all around the web. As this entertainment happens in real-time, the users watching will decide the winners by votes on the match floor. 
        </p2>
        <div><br></br></div>
        <p3 >
        Made to work best on desktop computers and laptops, our website is friendly to all different types of people. Our hope is to promote user engagement that creates a retention rate, such as chatting with streamers and other users in real-time.
        </p3>
        <div><br></br></div>
        </div>
        </div>
       
      </>
     
      
  )
}

export default About