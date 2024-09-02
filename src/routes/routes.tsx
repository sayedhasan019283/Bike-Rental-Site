import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import AllBikes from "../components/component/AllBikes/AllBikes";
import SingleProduct from "../components/component/SingleProduct/SingleProduct";
import Profile from "../components/component/Profile/Profile";
import AdminDashboard from "../components/component/AdminDashboard/AdminDashboard";
import AddProducts from "../components/component/AddProducts/AddProducts";
import AllBikesForDashboard from "../components/component/AllBikesForDashboard/AllBikesForDashboard";
import UpdateBike from "../components/component/UpdateBike/UpdateBike";
import Login from "../components/component/Login/Login";
import SignUp from "../components/component/SingleProduct/SignUp/SignUp";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AllRentals from "../components/component/AllRentals/AllRentals";
import SingleRental from "../components/component/SingleRental/SingleRental";
import AboutUs from "../components/component/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "bikes/all-bikes",
        element: <AllBikes />,
      },
      {
        path: "/:id",
        element: <SingleProduct />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "rentals",
        element: <AllRentals />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "/:id/single",
        element: <SingleRental />,
      },
      {
        path: "/admin-dashboard/",
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "add-products",
            element: (
              <ProtectedRoute role="admin">
                <AddProducts />
              </ProtectedRoute>
            ),
          },
          {
            path: "all-bikes",
            element: <AllBikesForDashboard />,
          },
          {
            path: "all-bikes/:id",
            element: <UpdateBike />,
          },
        ],
      },
    ],
  },
]);

export default router;
