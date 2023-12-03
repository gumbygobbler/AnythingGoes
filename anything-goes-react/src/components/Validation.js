const LoginPass = (values) => {
  let errors = {}

  if (!values.name) {
    errors.name = "Username Required"
  }
  else if (values.name.length < 5) {
    errors.name = "Username must be more than 5 characters"
  }

  if (!values.password) {  
    errors.password = "Password Required"
  }
  else if (values.password.length < 8) {
    errors.password = "Password must be more than 8 characters"
  }

  return errors;
}
  
  export default LoginPass;
  