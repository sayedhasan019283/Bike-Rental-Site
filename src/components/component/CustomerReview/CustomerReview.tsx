import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

const CustomerReview = () => {
  return (
    <div className="relative">
      <h2 className="text-3xl mb-2 font-bold text-center mt-5">
        Happy <span className="text-red-500">Customers</span> Say's
      </h2>
      <div>
        <div className="flex justify-center mt-2 mb-6">
          <div className=" h-2 w-12 bg-red-500 rounded-lg text-center "></div>
        </div>

        <div className="bg-base-200 h-72 mb-5 grid grid-cols-3">
          <div className="bg-red-500 h-72 grid-cols-1 rounded-tr-3xl rounded-br-3xl  hidden sm:hidden md:block"></div>
          <div className="col-span-2 mt-10 ml-32">
            <h1 className="text-2xl font-bold">Sayed Hossain</h1>
            <p className="mt-7 text-sm line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt saepe iure natus odio pariatur similique. Sequi, tempore
              commodi voluptatem impedit dolor voluptates voluptatum cupiditate
              ad aperiam corporis ea dolorum magni nostrum molestias, similique
              quis consequatur accusamus veniam architecto et.
            </p>

            <p className="mt-10">
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
            </p>
          </div>
        </div>
      </div>

      {/* Hidden on small and large screens */}
      {/* <div className="absolute h-52 w-52 rounded-full top-1/4 left-1/4 overflow-hidden hidden sm:block  ">
    <img
      src="https://res.cloudinary.com/sayed-ltd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724601933/logan-weaver-lgnwvr-0fiuoIIfl9g-unsplash_1_moiaxv.jpg"
      alt="Customer"
    />
  </div> */}
    </div>
  );
};

export default CustomerReview;
