import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);

  //console.log("Private Route Works");
  return user ? <>{children}</> : <Navigate to="/visitor" />;
};

export default PrivateRoute;
