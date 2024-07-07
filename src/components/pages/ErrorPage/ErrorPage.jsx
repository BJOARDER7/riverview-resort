import { Link } from "react-router-dom";
import errorImg from "../../../assets/404-error.jpg";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <Helmet 
      title="RiverView Resort | Error"
      ></Helmet>
    <div className="flex justify-center items-center">
    <img
      src={errorImg}
      className="max-w-full h-96 mx-auto rounded-lg"
      alt="Error"
    />
    </div>
    
    <Link to="/">
      <button className="px-5 py-2 mt-4 text-white bg-info rounded">
         Back to Home !
      </button>
    </Link>
  </div>
  );
};

export default ErrorPage;