import { createBrowserRouter } from "react-router-dom";
import Roots from "../../Layout/Roots/Roots";
import Home from "../../Pages/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu";
import OurShop from "../../Pages/OurShop/OurShop";
import Contact from "../../Pages/Contact/Contact";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Signup/SignUp";
import UserHome from "../../Layout/UserDashboard/UserHome";
import PaymentHistory from "../../Layout/UserDashboard/PaymentHistory";
import Reservation from "../../Layout/UserDashboard/Reservation";
import MyCart from "../../Layout/UserDashboard/MyCart";
import AddReview from "../../Layout/UserDashboard/AddReview";
import MyBooking from "../../Layout/UserDashboard/MyBooking";
import Payment from "../../Layout/UserDashboard/Payment";

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
      //   user
      {
        path: "/Dashboard/user home",
        element: <UserHome />,
      },
      {
        path: "/Dashboard/reservation",
        element: <Reservation />,
      },
      {
        path: "/Dashboard/payment history",
        element: <PaymentHistory />,
      },
      {
        path: "/Dashboard/my cart",
        element: <MyCart />,
      },
      {
        path: "/Dashboard/add review",
        element: <AddReview />,
      },
      {
        path: "/Dashboard/my booking",
        element: <MyBooking />,
      },
      {
        path:"/Dashboard/payment",
        element:<Payment/>
      }
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
