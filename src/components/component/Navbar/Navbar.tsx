import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetProfileQuery } from "../../../redux/Bikes/BikesApi";
// import {  useAppSelector } from "../redux/hooks";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // const { products, total } = useAppSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(search);
  };

  const { data: profile } = useGetProfileQuery(undefined);

  console.log(profile?.data?.role)

  const isAdmin = profile?.data?.role === 'admin';

  useEffect(() => {}, []);
  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          {isAdmin ? (
        <NavLink
          to="/admin-dashboard/add-products"
          className={({ isActive }) =>
            `text-white px-2 py-1 transition-colors duration-300 ${
              isActive ? 'bg-red-500' : 'hover:bg-red-500'
            }`
          }
        >
          Dashboard
        </NavLink>
      ) : (
        <NavLink
          to="/rentals"
          className={({ isActive }) =>
            `text-white px-2 py-1 transition-colors duration-300 ${
              isActive ? 'bg-red-500' : 'hover:bg-red-500'
            }`
          }
        >
          My Rentals
        </NavLink>
      )}
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

      <div className="flex navbar-end">
        <div className="hidden sm:block">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto mr-3"
              onBlur={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="mr-3 text-white">
              Search
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-white">Login</h2>
        </div>
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <div className="indicator text-white">
              <svg
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
              </svg>
              {/* <span className="badge badge-sm indicator-item text-red-500 ">
                {products?.length}
              </span> */}
            </div>
          </div>
        </div>
      </div>
      {/* {data && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data?.map(
            (product: IProduct, index: Key | null | undefined) => (
              <ProductCard key={index} product={product} />
            )
          )}
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
