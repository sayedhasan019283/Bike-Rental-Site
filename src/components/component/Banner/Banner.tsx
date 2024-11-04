import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  AOS.init();
  return (
    <div className=" w-full ">
      <div className=" w-full h relative">
        <img
          src="https://res.cloudinary.com/sayed-ltd/image/upload/v1730609651/1196394_im2nwk.jpg"
          className="w-full h-[550px] "
        />
        <div className="absolute top-1/4 right-1/4" data-aos="fade-up">
            <h2 className="  text-4xl text-red-500 font-bold">KTM DUKE</h2>
            <h2 className="  text-7xl text-white font-bold">For Rent</h2>  
            <h2 className="  text-7xl text-white font-bold">150$/day</h2>  
            <button className="btn bg-red-500 text-white py-2 px-4 mt-3 font-bold">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
