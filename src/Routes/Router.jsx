import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Details from "../Pages/ServiceDetails/Details";
import CheckOut from "../Pages/CheckOut/CheckOut";
import NewService from "../Pages/Profile/Admin/AdminComponents/NewService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Admin from "../Pages/Profile/Admin/Admin";
import DashBoard from "../Pages/Profile/Admin/AdminComponents/DashBoard/DashBoard";
import AdminProfile from "../Pages/Profile/Admin/AdminComponents/AdminProfile";
import ManageService from "../Pages/Profile/Admin/AdminComponents/ManageService";
import AddProducts from "../Pages/Profile/Admin/AdminComponents/AddProducts";
import ManageProducts from "../Pages/Profile/Admin/AdminComponents/ManageProducts";
import UserProfile from "../Pages/Profile/UserProfile/UserProfile";

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
          fetch(`https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/service/${params.id}`),
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/service/${params.id}`),
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "",
            element: <AdminProfile />,
          },
          {
            path: "addProducts",
            element: <AddProducts />,
          },
          {
            path: "manageProducts",
            element: <ManageProducts />,
            loader: () => fetch("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/products"),
          },
          {
            path: "dashboard",
            element: <DashBoard />,
          },
          {
            path: "addService",
            element: <NewService />,
          },
          {
            path: "manageService",
            element: <ManageService />,
            loader: () => fetch("https://recap-car-doctor-server-kq91fhz4b-rupomhasans-projects.vercel.app/services"),
          },
        ],
      },
    ],
  },
]);
export default router;
