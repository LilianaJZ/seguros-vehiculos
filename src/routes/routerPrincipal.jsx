import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SingIIn from "../pages/SingIIn";
import LogAndSignIn from "../pages/LogAndSignIn";


const RouterPrincipal = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/singiin",
    element: <SingIIn />,
  },
  {
    path: "/loginSignin",
    element: <LogAndSignIn />,
  },


]);

export default RouterPrincipal;
