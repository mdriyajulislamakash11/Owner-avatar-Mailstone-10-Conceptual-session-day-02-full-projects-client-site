import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/MainLayouts";
import AddSchedule from "../pages/AddSchedule";
import Home from "../pages/Home";
import AllSchedule from "../pages/AllSchedule";
import SignIn from "../pages/SignIn";
import Updated from "../pages/Updated";

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
            path: "/addSchedule",
            element: <AddSchedule />
        },
        {
            path: "/allSchedule",
            element: <AllSchedule />,
            loader: () => fetch(`https://server2-eight-khaki.vercel.app/schedule`)
        },
        {
            path: "/update/:id",
            element: <Updated />,
            loader: ({params}) => fetch(`https://server2-eight-khaki.vercel.app/schedule/${params?.id}`)
        },
        {
            path: "/signIn",
            element: <SignIn />
        },
    ],
  },
]);

export default routes