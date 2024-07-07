import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import EstateDetails from "../components/pages/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/pages/UpdateProfile/UpdateProfile";
import Booking from "../components/pages/Booking/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/hospitality.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/booking",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('/hospitality.json')       
      }

    ]
  },
])
export default router;