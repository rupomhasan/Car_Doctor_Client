import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Details from "../Pages/ServiceDetails/Details";
import CheckOut from "../Pages/CheckOut/CheckOut";
import NewService from "../Pages/AddService/NewService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Home />, path: "/" },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:2500/service/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:2500/service/${params.id}`),
      },
      {
        path: "/addService",
        element: <NewService />,
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <SignUp />,
        path: "/signup",
      },
    ],
  },
]);
export default router;
