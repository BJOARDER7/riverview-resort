import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false); 


  const handleRegister = e => {
    e.preventDefault();    

    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    // password validation
    if(password.length < 6){
      toast.error('Password at least 6 character');     
      return;
    }
    else if (!/[A-Z]/.test(password)){
      toast.error('Password must have an Uppercase letter');      
      return;
    }
    else if (!/[a-z]/.test(password)){
      toast.error('Password must have a Lowercase letter');      
      return;
    }


    // create user
  createUser(email, password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    toast.success("User created successfully");
  })
  .catch(error => {      
    toast.error(error.message);    
  })

  }
  

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet 
      title="RiverView Resort | Register"
      ></Helmet>
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-lg md:text-5xl font-bold">Register Now!</h1>      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type={showPassword ? 'text' : 'password'} 
          name="password" 
          placeholder="Password" 
          className="input input-bordered" required />
          <span className="absolute inset-y-0 top-8 right-4 flex items-center" onClick={() => setShowPassword(!showPassword)}>
            {
              showPassword ? <FaEyeSlash className="text-2xl"></FaEyeSlash> : <FaEye className="text-2xl"></FaEye>
            }
            </span>          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div className="text-center my-2">
        <p>Have an account ? Please <Link className="text-emerald-600 font-bold" to="/login">Login</Link></p>        
      </div>      
      
    </div>
  </div>
  <div><Toaster/></div>
</div>
  );
};

export default Register;