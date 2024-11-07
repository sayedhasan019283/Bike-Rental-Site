import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
// import { useState } from "react";





const MainLayout = () => {

  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // }

  return (
    // ${darkMode && 'dark'}
  <div className={` w-full relative overflow-x-hidden`}>
      <div className="dark:bg-black">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
      <div className="absolute  top-4 right-4 bg-white rounded-full">
        {/* <button 
        className=""
        onClick={toggleDarkMode}
        >
          {darkMode ? "LHT" : 'DRK'}
        </button> */}
      </div>
  </div>

  );
};

export default MainLayout;
