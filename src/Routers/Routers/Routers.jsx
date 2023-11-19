import { createBrowserRouter } from "react-router-dom";
import Roots from "../../Layout/Roots/Roots";
import Home from "../../Pages/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu";
import OurShop from "../../Pages/OurShop/OurShop";
import Contact from "../../Pages/Contact/Contact";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Signup/SignUp";
import Admin from "../../Layout/AdminDashboard/Admin";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/Shop",
        element: <OurShop />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/Dashboard/admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
]);

export default routers;
