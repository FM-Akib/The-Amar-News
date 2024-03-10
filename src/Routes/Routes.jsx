import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Privateroute from "./Privateroute";
import Bookmark from "../Pages/Bookmark";
import ANews from "../Pages/ANews";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/news/:id",
          element:  <ANews></ANews>,
         
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "signup",
          element: <Signup></Signup>
        },
        {
          path: "bookmark",
          element: <Privateroute><Bookmark></Bookmark></Privateroute>
        },
        {
          path: "about",
          element: <About></About>
        }
    ]
    },

  ]);
export default router;