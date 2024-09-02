const Banner = () => {
  return (
    <div className=" w-full ">
      <div className=" w-full h relative">
        <img
          src="https://res.cloudinary.com/sayed-ltd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1724603990/istockphoto-507636756-1024x1024_gdhcea.jpg"
          className="w-full h-[500px] "
        />
        <div className="absolute top-1/4 right-1/4">
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
