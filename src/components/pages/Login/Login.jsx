import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Login = () => {
  const {logIn, googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    // login user
    logIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);

      // navigation after login
      navigate(location?.state ? location.state : '/');

    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div>
        <button onClick={handleGoogleLogin} className="btn">Google</button>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;