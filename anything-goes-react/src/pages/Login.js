import LoginUser from "../components/LoginUser";
import Validation from "../components/Validation"; //validation
import React, {useEffect, useState} from "react";


function Login() {
  const [values, setValues] = useState({
    name: '',
    password: ''
  })

  const [errors, setErrors] = useState({ })

  function handleChange(event) {
    setValues({...values, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && (values.name !== "" && values.name !== "")) {
      alert("from submitted");
    }
  }, [errors])

  return(
    <div className="wrap" >
      <form onSubmit={handleSubmit}>
        <div className="container"  style={{ justifyContent: "center"}}>
          <label style={{ color: "red", fontWeight: "bold", textAlign: "center", fontSize: "49px"}}>Username</label>
          <input type="text" placeholder="Enter Username" name="name" value={values.name} onChange={handleChange}></input>
          {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
          
          <label style={{ color: "red", fontWeight: "bold", textAlign: "center", fontSize: "49px"}}>password</label>
          <input type="password" placeholder="Enter Password" name="password" value={values.password} onChange={handleChange}></input>
          {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
          
          <button type="submit">Login</button>
          {/* //ButtonLink to="/home" classes="general-button"Login/ButtonLink */}
        </div>
        <div className="container" style={{ justifyContent: "center"}}>
          <span className="psw">Not a User?<a href="#">Sign Up!</a></span>
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



// {/* 
//         <div>
//           <h1 style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
//             Returning User:
//           </h1>
//         </div>
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <p>Username:</p>
//         </div>
//         <div style={{ paddingLeft: 150, paddingRight: 150, marginTop: 25 }}>
//           <LoginUser uid="2" namepasskeystate="username" logregstate="cock">cockballs</LoginUser>
//         </div> */}
//         {/*
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <p>Password:</p>
//         </div>
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <LoginPass children={test}></LoginPass>
//         </div>
//         <div style={{ paddingLeft: 550, paddingRight: 550 }}>
//           <Button color="outline-light">LOGIN</Button>
//         </div>
//         <br />
//         <div>
//           <h1 style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
//             New User:
//           </h1>
//         </div>
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <p>New Username:</p>
//         </div>
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <RegUser children={test}></RegUser>
//         </div>
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <p>New Password:</p>
//         </div>
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <RegPass children={test}></RegPass>
//         </div>
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <p>Confirm Password:</p>
//         </div>
//         <div style={{ paddingLeft: 350, paddingRight: 350 }}>
//           <RegPass children={test}></RegPass>
//         </div>
//         <div style={{ paddingLeft: 550, paddingRight: 550 }}>
//           <Button color="outline-light">SIGN UP</Button>
//         </div> */}
//       </main>
//     </>
//   );
// }
 export default Login;
