import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  
  if(loading){
    return <span className="loading loading-spinner text-accent"></span>
  }

  if(user){
    return children;
  }
  return <Navigate state={location.username} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.object
}

export default PrivateRoute;