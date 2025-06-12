import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/MainLayouts";
import AddSchedule from "../pages/AddSchedule";
import Home from "../pages/Home";

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
    ],
  },
]);

export default routes