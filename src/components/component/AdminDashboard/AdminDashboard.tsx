import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-1 bg-gradient-to-r from-red-500 to-orange-400 text-gray-100 sticky h-auto">
        <NavLink className="btn w-full mt-3" to='/admin-dashboard/add-products'>Add Bikes</NavLink>
        <br />
        <NavLink className="btn w-full mt-3" to='/admin-dashboard/all-bikes'>All Bikes</NavLink>
        <br />
        <NavLink className="btn w-full mt-3"  to='/admin-dashboard/all-users'>All users</NavLink>
        <NavLink className="btn w-full mt-3"  to='/admin-dashboard/rental-history'>Rental History</NavLink>
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
