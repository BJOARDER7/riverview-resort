import { Outlet } from "react-router-dom";
import Navbar from "../../components/pages/Navbar/Navbar";
import Footer from "../../components/pages/Footer/Footer";
import { Helmet } from "react-helmet";


const Root = () => {
  
  return (
    <div>
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