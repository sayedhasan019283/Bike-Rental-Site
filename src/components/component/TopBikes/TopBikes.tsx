
const TopBikes = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  mb-4">
      <div className="grid-cols-1">
        <img
          src="https://res.cloudinary.com/sayed-ltd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1724611093/harley-davidson-1Lg7p5hC2pI-unsplash_njyu57.jpg"
          alt="Top Bike"
        />
      </div>
      <div className="grid-cols-1 bg-black">
        <h2 className="text-white text-2xl font-bold text-center mt-8">
          World Top 100 Bikes For You!
        </h2>
        <p className="text-sm text-white text-center mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          veniam corrupti sed non porro nesciunt incidunt fugiat ullam optio est
          beatae. Quod impedit quia doloribus!
        </p>
        <p className="text-sm text-white text-center mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
          veniam corrupti sed non porro nesciunt incidunt fugiat ullam optio est
          beatae. Quod impedit quia doloribus!
        </p>
      </div>
    </div>
  );
};

export default TopBikes;
