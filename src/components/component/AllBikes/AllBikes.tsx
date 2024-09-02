import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useGetBikesQuery } from "../../../redux/Bikes/BikesApi";
import { NavLink } from "react-router-dom";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
const AllBikes = () => {

  const { data: bikes } = useGetBikesQuery(undefined);
  console.log(bikes?.data)

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 bg-gradient-to-r from-red-500 to-orange-400 text-gray-100 sticky">
        <h1>This is Filter part </h1>
      </div>
      <div className="col-span-4 bg-base-200">
        <div className=" mt-6">
          <div className="grid  gap-5">
            {/* card show hear */}
            <div className=" grid grid-cols-3 gap-4 mt-6 mb-4 ml-2 mr-2">
              {
                bikes?.data?.map((bike: { _id: Key | null | undefined; name: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                  <div className="grid-cols-1 border border-red-500 p-5 border-r-2 shadow-2xl" key={bike._id}>
                <div>
                  <img
                    src="https://res.cloudinary.com/sayed-ltd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1724601933/logan-weaver-lgnwvr-0fiuoIIfl9g-unsplash_1_moiaxv.jpg"
                    alt=""
                  />
                </div>
                <div className="flex">
                  <div>
                    <h1>{bike?.name}</h1>
                    <p>location</p>
                    <NavLink to={`/${bike?._id}`} className="btn bg-red-500 text-white py-2 px-4 mt-3 font-bold">
                      View Details
                    </NavLink>
                  </div>
                  <div className="ml-auto text-right">
                    <h3>$100</h3>
                    <p className="text-sm">DAY</p>
                    <p className="mt-8">
                      991 Reviews{" "}
                      <FontAwesomeIcon
                        className="text-yellow-500"
                        icon={faStar}
                      />{" "}
                      5.0
                    </p>
                  </div>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBikes;
