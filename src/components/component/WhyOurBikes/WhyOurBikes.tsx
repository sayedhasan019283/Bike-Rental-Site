import AOS from "aos";
import "aos/dist/aos.css";

const WhyOurBikes = () => {
  AOS.init();
  return (
    <div className="bg-base-200 p-4 mb-4 ">
      <h2 className="text-3xl mb-2 font-bold text-center mt-5">
        Why <span className="text-red-500">Our</span> Bikes?
      </h2>
      <div className="flex justify-center mt-2 mb-6">
        <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-4/5 lg:w-3/5 mx-auto gap-4">
  <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex bg-white p-4 rounded-md" data-aos="fade-right">
      <div className="w-1/3">
        <img
          src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724666822/Capture11_p3o8r4.png"
          alt="Immediate Booking"
          className="w-full"
        />
      </div>
      <div className="w-2/3 pl-4">
        <h1 className="text-xl font-bold">Immediate Booking</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quisquam in deserunt distinctio quis?
        </p>
      </div>
    </div>
    <div className="flex bg-white p-4 rounded-md" data-aos="fade-left">
      <div className="w-1/3">
        <img
          src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724666842/Capture22_mzvpaj.png"
          alt="Online Booking"
          className="w-full"
        />
      </div>
      <div className="w-2/3 pl-4">
        <h1 className="text-xl font-bold">Online Booking</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quisquam in deserunt distinctio quis?
        </p>
      </div>
    </div>
    <div className="flex bg-white p-4 rounded-md" data-aos="fade-right">
      <div className="w-1/3">
        <img
          src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724666843/Capture33_rj7jvi.png"
          alt="Refundable Booking"
          className="w-full"
        />
      </div>
      <div className="w-2/3 pl-4">
        <h1 className="text-xl font-bold">Refundable Booking</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quisquam in deserunt distinctio quis?
        </p>
      </div>
    </div>
    <div className="flex bg-white p-4 rounded-md" data-aos="fade-left">
      <div className="w-1/3">
        <img
          src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724666854/Capture44_ducsx2.png"
          alt="24/7 Assistance Support"
          className="w-full"
        />
      </div>
      <div className="w-2/3 pl-4">
        <h1 className="text-xl font-bold">24/7 Assistance Support</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quisquam in deserunt distinctio quis?
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default WhyOurBikes;
