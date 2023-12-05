import Validation from "../components/Validation"; //validation
import React, {useEffect, useState} from "react";
import FormData from  'form-data'

function Signup() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({ })

  function handleChange(event) {
    setValues({...values, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    const newUserData = new FormData()
    newUserData.append('username', values.name)
    newUserData.append('password', values.password)
    newUserData.append('password2', values.password2)

    try {
      const response = fetch("http://localhost:8000/api/user/register", {
          method: "POST",
          body: newUserData
      })
      .then(res => console.log(res))
      console.log(response)
      //const createdFight = response.json();
  }   
  catch (error) {
      console.error("Error adding new fight data:", error);
  }
    
    setErrors(Validation(values, 2));
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && (values.name !== "" && values.name !== "")) {
      alert("from submitted"); //logic goes here for sending to db
    }
  }, [errors])

  return(
    <div className="wrap" >
      <form onSubmit={handleSubmit}>
        <div className="container"  style={{ justifyContent: "center"}}>
          <label style={{ color: "lime", fontWeight: "bold", textAlign: "center", fontSize: "49px"}}>Username</label>
          <input type="text" placeholder="Enter Username" name="name" value={values.name} onChange={handleChange}></input>
          {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
          
          <label style={{ color: "red", fontWeight: "bold", textAlign: "center", fontSize: "49px"}}>password</label>
          <input type="password" placeholder="Enter Password" name="password" value={values.password} onChange={handleChange}></input>
          {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

          <input type="password" placeholder="Enter Password Again" name="password2" value={values.password2} onChange={handleChange}></input>
          {errors.password2 && <p style={{color:"red"}}>{errors.password2}</p>}
          
          <button type="submit">Sign Up</button>
          {/* //ButtonLink to="/home" classes="general-button"Login/ButtonLink */}
        </div>
        <div className="container" style={{ justifyContent: "center"}}>
          <span className="psw">Returning User?<a href="/Signup">Login!</a></span>
        </div>
      </form>
    </div>
  )
}

// function Login() {
//   const test = "test";

//   //boolean

  
//   const userAccounts = [];
//   userAccounts.push([1, "user1", "somePassword"]); //admin

//   return (
//     <>
//       <main className="container" style={{ justifyContent: "center" }}>

//       {/* <ButtonLink to="/about" classes="general-button">
//           About
//         </ButtonLink> */}
//       {/* const ButtonLink = ({ uID , uname, pword }) => {
//   return (
//     <Link style={{ textDecoration: "none" }} to={to}>
//       <button type="button" className={classes}>
//         {children}
//       </button>
//     </Link>
//   );
// }; */}

 export default Signup;