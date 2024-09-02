
const WhyOurBikes = () => {
    return (
        <div className="bg-base-200 p-4 mb-4 ">
            <h2 className="text-3xl mb-2 font-bold text-center mt-5">
        Why <span className="text-red-500">Our</span> Bikes?
      </h2>
      <div className="flex justify-center mt-2 mb-6">
        <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
      </div>
            <div className="grid grid-cols-5">
            <div className="col-span-1"></div>
            <div className="col-span-3 grid grid-cols-2 gap-4">
                <div className="grid-cols-1 flex bg-white p-4 rounded-md" >
                    <div className="w-full">
                        <img src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724666822/Capture11_p3o8r4.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bolt">Immediate Booking</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quisquam in deserunt distinctio quis?</p>
                    </div>
                </div>
                <div className="grid-cols-1 flex bg-white p-4 rounded-md" >
                    <div className="w-full">
                        <img src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724666842/Capture22_mzvpaj.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bolt">Online Booking</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quisquam in deserunt distinctio quis?</p>
                    </div>
                </div>
                <div className="grid-cols-1 flex bg-white p-4 rounded-md" >
                    <div className="w-full">
                        <img src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724666843/Capture33_rj7jvi.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bolt">Refundable Booking</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quisquam in deserunt distinctio quis?</p>
                    </div>
                </div>
                <div className="grid-cols-1 flex bg-white p-4 rounded-md" >
                    <div className="w-full">
                        <img src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724666854/Capture44_ducsx2.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bolt">24/7 Assistance Support</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quisquam in deserunt distinctio quis?</p>
                    </div>
                </div>
                
            </div>
            <div className="col-span-1"></div>
        </div>
        </div>
    );
};

export default WhyOurBikes;