import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/MainLayouts";
import AddSchedule from "../pages/AddSchedule";
import Home from "../pages/Home";
import AllSchedule from "../pages/AllSchedule";
import SignIn from "../pages/SignIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "addSchedule",
            element: <AddSchedule />
        },
        {
            path: "allSchedule",
            element: <AllSchedule />,
            loader: () => fetch(`http://localhost:5000/schedule`)
        },
        {
            path: "signIn",
            element: <SignIn />
        },
    ],
  },
]);

export default routes