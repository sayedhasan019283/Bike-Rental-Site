import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  useGetProfileQuery,
  // useSearchItemsQuery,
} from "../../../redux/Bikes/BikesApi";

const Navbar = () => {
  const { data: profile } = useGetProfileQuery(undefined);

  console.log(profile?.data?.role);

  const userExist = profile?.data?.role;

  const isAdmin = profile?.data?.role === "admin";
  const isUser = profile?.data?.role === "user";

  const handleLogout = () => {
    // Remove the authentication token from local storage
    localStorage.removeItem("authToken");

    // Optionally, clear any other data related to the user (e.g., user info, preferences)
    localStorage.removeItem("userData"); // Example if you store additional user data

    // Optionally, clear the session storage if you are using it
    sessionStorage.clear();

    // Redirect to the login or home page
    window.location.href = "/login"; // Adjust the path as needed

    // If using a state management library (like Redux or Context API), reset any user state
    // dispatch({ type: 'LOGOUT' });

    console.log("User logged out successfully");
  };

  useEffect(() => {}, []);
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/product/all-product">All Product</NavLink>
            </li>
            <li>
              <NavLink to="/add-product">Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <NavLink to="/" className="btn btn-ghost text-xl">
            Bike Rental Service
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {isAdmin ? (
              <NavLink
                to="/admin-dashboard/dashboard"
                className={({ isActive }) =>
                  `text-white px-2 py-1 transition-colors duration-300 ${
                    isActive ? "bg-red-500" : "hover:bg-red-500"
                  }`
                }
              >
                Dashboard
              </NavLink>
            ) : isUser ? (
              <NavLink
                to="user/dashboard"
                className={({ isActive }) =>
                  `text-white px-2 py-1 transition-colors duration-300 ${
                    isActive ? "bg-red-500" : "hover:bg-red-500"
                  }`
                }
              >
                Dashboard
              </NavLink>
            ) : (
              <p></p>
            )}
          </li>

          <li>
            <NavLink
              to="/bikes/all-bikes"
              className={({ isActive }) =>
                `text-white px-2 py-1 transition-colors duration-300 ${
                  isActive ? "bg-red-500" : "hover:bg-red-500"
                }`
              }
            >
              All Bikes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/rentals"
              className={({ isActive }) =>
                `text-white px-2 py-1 transition-colors duration-300 ${
                  isActive ? "bg-red-500" : "hover:bg-red-500"
                }`
              }
            >
              My Rentals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `text-white px-2 py-1 transition-colors duration-300 ${
                  isActive ? "bg-red-500" : "hover:bg-red-500"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex navbar-end right-0">
        <div>
          {userExist ? (
            <NavLink
              to="/login"
              className="text-white  hover:bg-red-500  px-2 py-1 rounded-lg"
              onClick={handleLogout}
            >
              Log out
            </NavLink>
          ) : (
            <NavLink
              to="/sign-up"
              className="text-white border hover:bg-red-500  p-3"
            >
              Sign Up
            </NavLink>
          )}
        </div>
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <div className="indicator text-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
