const HowItWorks = () => {
  return (
    <div>
      <h2 className="text-3xl mb-2 font-bold text-center mt-5">
        How <span className="text-red-500">It</span> Works?
      </h2>
      <div className="flex justify-center mt-2 mb-6">
        <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
      </div>
      <div className="grid grid-cols-5 gap-4 mb-10">
        <div className=" grid-cols-1"></div>
        <div className="grid-cols-1 border border-red-500 p-7">
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724606437/Capture2_nvox3l.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h2 className="text-center font-bold mt-2 mb-2">
                Find The Right Bike
              </h2>
              <h2 className="flex items-center justify-center">
                <p className=" text-sm text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  quisquam perferendis deserunt quis quia odit? Neque quaerat
                  blanditiis ipsum ab.
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 border border-red-500 p-7">
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724606431/Capture_jx0sqe.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h2 className="text-center font-bold mt-2 mb-2">
                Book It Online
              </h2>
              <h2 className="flex items-center justify-center">
                <p className=" text-sm text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  quisquam perferendis deserunt quis quia odit? Neque quaerat
                  blanditiis ipsum ab.
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 border border-red-500 p-7">
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/sayed-ltd/image/upload/v1724606443/Capture3_ak2dvz.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h2 className="text-center font-bold  mb-2">Enjoy Your Ride</h2>
              <h2 className="flex items-center justify-center">
                <p className=" text-sm text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  quisquam perferendis deserunt quis quia odit? Neque quaerat
                  blanditiis ipsum ab.
                </p>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid-cols-1"></div>
      </div>
    </div>
  );
};

export default HowItWorks;
