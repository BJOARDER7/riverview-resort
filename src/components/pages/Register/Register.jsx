import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
  const {createUser} = useContext(AuthContext); 


  const handleRegister = e => {
    e.preventDefault();    

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    // password validation
    if(password.length < 6){
      toast('Password at least 6 character');     
      return;
    }
    else if (!/[A-Z]/.test(password)){
      toast('Password must have an Uppercase letter');      
      return;
    }
    else if (!/[a-z]/.test(password)){
      toast('Password must have a Lowercase letter');      
      return;
    }


    // create user
  createUser(email, password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    toast("User created successfully");
  })
  .catch(error => {      
    toast(error.message);    
  })

  }
  

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div>
        <Link to="/login">Login</Link>
      </div>      
      
    </div>
  </div>
  <div><Toaster/></div>
</div>
  );
};

export default Register;