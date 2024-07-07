import { Outlet } from "react-router-dom";
import Navbar from "../../components/pages/Navbar/Navbar";
import Footer from "../../components/pages/Footer/Footer";
import { Helmet } from "react-helmet";


const Root = () => {
  
  return (
    <div className="mx-2 md:mx-8">
      <Helmet 
      title="RiverView Resort | Home"
      ></Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;