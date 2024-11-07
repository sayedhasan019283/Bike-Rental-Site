import { NavLink, Outlet } from "react-router-dom";
import {
//   FaTachometerAlt,
//   FaUserShield,
  // FaShoppingBag,
  FaBox,
//   FaDollarSign,
  FaPowerOff,
//   FaPlus,
  FaCartPlus,
} from "react-icons/fa";
const DashboardForUser = () => {
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
                      to="/user/dashboard/my-rental"
                    >
                      <FaCartPlus className="text-black mr-3" />
                      <span className="text-black">My Rental</span>
                    </NavLink>
                  </li>
                  {/* Products */}
                  <li className=" hover:bg-blue-100 rounded-lg cursor-pointer">
                    <NavLink
                      className="flex items-center py-2 px-4"
                      to="/admin-dashboard/all-bikes"
                    >
                      <FaBox className="text-black mr-3" />
                      <span className="text-black">Bikes</span>
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

export default DashboardForUser;