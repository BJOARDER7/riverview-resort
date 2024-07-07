import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const navLinks = <>
    <li className="px-1"><NavLink to="/">Home</NavLink></li>
    <li className="px-1"><NavLink to="/update">Update Profile</NavLink></li>  
    <li className="px-1"><NavLink to="/booking">Booking</NavLink></li>     
  </>

  const handleLogOut = () => {
    logOut()
    .then(() => console.log('User login successfully'))
    .catch(error => console.log(error))
  }
  

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

        {navLinks}

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">RiverView Resort</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      {navLinks}

    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
      <div title={user.displayName} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
          <img
            alt="User"
            src={user.photoURL} />
        </div>
        </div>
      <a onClick={handleLogOut} className="btn btn-sm btn-outline ms-2">Sign Out</a>
      </>
      :
      <Link to="/login">
        
        <button className="btn btn-sm btn-accent">Login</button>
        </Link>
    }
    
  </div>
</div>
  );
};

export default Navbar;