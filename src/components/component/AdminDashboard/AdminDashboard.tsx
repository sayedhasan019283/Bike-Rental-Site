import { NavLink, Outlet } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserShield,
  FaShoppingBag,
  FaBox,
  FaDollarSign,
  FaPowerOff,
  FaPlus,
} from "react-icons/fa";

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken')
  }
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-1 bg-gradient-to-r from-red-500 to-orange-400 text-gray-100 sticky h-auto">


        <div className="w-64 h-screen  p-6">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center mb-4">
              {/* Placeholder for profile image */}
              <img
                src="https://icon-library.com/images/profile-icon/profile-icon-4.jpg" // Replace with actual image URL
                alt="User Profile"
                className="w-full h-full rounded-full"
              />
            </div>

            {/* User Name */}
            <h2 className="text-xl font-semibold text-black">Imran Molla</h2>
          </div>

          <nav className="mt-8">
            <ul>
              {/* Dashboard */}
              <li className=" hover:bg-blue-100 rounded-lg cursor-pointer">
              <NavLink
                  className="flex items-center py-2 px-4"
                  to="/admin-dashboard/dashboard"
                >
                  <FaTachometerAlt className="text-black mr-3" />
                  <span className="text-black">Dashboard</span>
                </NavLink>
              </li>
              

              {/* Products */}
              <li className=" hover:bg-blue-100 rounded-lg cursor-pointer">
                <NavLink
                  className="flex items-center py-2 px-4"
                  to="/admin-dashboard/all-bikes"
                >
                  <FaBox className="text-black mr-3" />
                  <span className="text-black">Products</span>
                </NavLink>
              </li>
              <li className=" hover:bg-blue-100 rounded-lg cursor-pointer">
                <NavLink
                  className="flex items-center py-2 px-4"
                  to="/admin-dashboard/add-products"
                >
                  <FaPlus className="text-black mr-3" />
                  <span className="text-black">Add Products</span>
                </NavLink>
              </li>

              {/* Orders */}
              <li className=" hover:bg-blue-100 rounded-lg cursor-pointer">
                <NavLink
                  className="flex items-center py-2 px-4"
                  to="/admin-dashboard/rental-history"
                >
                  <FaShoppingBag className="text-black mr-3" />
                  <span className="text-black">Orders</span>
                </NavLink>
              </li>

              {/* Earning Status */}
              <li className=" hover:bg-blue-100 rounded-lg cursor-pointer">
                <NavLink 
                to="/admin-dashboard/earnings"
                className="flex items-center py-2 px-4">
                <FaDollarSign className="text-black mr-3" />
                <span className="text-black">Earning Status</span>
                </NavLink>
              </li>

              {/* Administrator */}
              <li className=" hover:bg-blue-100 rounded-lg cursor-pointer">
                <NavLink
                  className="flex items-center py-2 px-4"
                  to="/admin-dashboard/all-users"
                >
                  <FaUserShield className="text-black mr-3" />
                  <span className="text-black">Administrator</span>
                </NavLink>
              </li>

              {/* Logout */}
              <li className=" hover:bg-blue-100 rounded-lg cursor-pointer">
                <NavLink 
                to='/login'
                className="flex items-center py-2 px-4"
                onClick={handleLogout}
                >
                  <FaPowerOff className="text-black mr-3" />
                  <span className="text-black">Logout</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
