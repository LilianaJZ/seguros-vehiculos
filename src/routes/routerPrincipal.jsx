import Home from "../pages/Home";
import Login from "../pages/Login";
import SingIIn from "../pages/SingIIn";

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
]);

export default RouterPrincipal;
