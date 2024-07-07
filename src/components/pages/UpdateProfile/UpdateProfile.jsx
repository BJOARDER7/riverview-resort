import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet";


const UpdateProfile = () => {
  const {changeProfile} = useContext(AuthContext);

  const handleProfile = e => {
    e.preventDefault();    

    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    // update profile
    changeProfile(name, photo)
    .then(() => console.log('Profile updated'))
    .catch(error => console.log(error))
  }

  

  return (
    
    <div className="hero bg-base-200 min-h-screen">
      <Helmet 
      title="RiverView Resort | Update"
      ></Helmet>
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update Profile</h1>      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleProfile} className="card-body">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Your Profile</button>
        </div>
      </form>          
      
    </div>
  </div>
  
</div>
  );
};

export default UpdateProfile;