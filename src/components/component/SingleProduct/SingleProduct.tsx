import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  useCreateRentalMutation,
  useGetSingleBikeQuery,
} from "../../../redux/Bikes/BikesApi";
import { useParams } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const { data: bike } = useGetSingleBikeQuery(id);
  console.log(bike?.data);

  const [startTime, setStartTime] = useState<Date | null>(null);

  const [createRental] = useCreateRentalMutation();

  const handleSendData = async () => {
    try {
      const result = await createRental({
        bikeId: id,
        startTime: startTime
          ? startTime.toISOString()
          : new Date().toISOString(),
      }).unwrap();
      Swal.fire({
        icon: "success",
        title: "sign Up Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = "rentals";
      console.log(result);
      console.log("Data sent successfully");
    } catch (error) {
      console.error("Failed to send data", error);
      window.location.href = "/login";
      Swal.fire({
        icon: "error",
        title: "Please Login first!",
      });
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 mb-5">
  <div className="col-span-1 w-4/5 mx-auto">
    <img
      src="https://res.cloudinary.com/sayed-ltd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1724601933/logan-weaver-lgnwvr-0fiuoIIfl9g-unsplash_1_moiaxv.jpg"
      alt=""
    />
  </div>
  <div className="flex items-center justify-between col-span-1 w-4/5 mx-auto">
    <div>
      <h1>{bike?.data?.name}</h1>
      <p>location</p>
      <div>
        <DatePicker
          selected={startTime}
          onChange={(date) => setStartTime(date)}
          showTimeSelect
          dateFormat="Pp"
          className="border rounded-sm py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
          autoComplete="off"
          placeholderText="Input Date And Time"
        />
      </div>
      <button
        onClick={handleSendData}
        className="btn bg-red-500 text-white py-2 px-4 mt-3 font-bold"
      >
        Book Now
      </button>
    </div>
    <div className="ml-auto text-right">
      <h3>$100</h3>
      <p className="text-sm">DAY</p>
      <p className="mt-8">
        991 Reviews{" "}
        <FontAwesomeIcon className="text-yellow-500" icon={faStar} /> 5.0
      </p>
    </div>
  </div>
</div>

      <div>
        <div className="relative">
          <h2 className="text-3xl mb-2 font-bold text-center mt-5">
            Customers <span className="text-red-500">Comment</span> Section
          </h2>
          <div className="flex justify-center mt-2 mb-6">
            <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
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
      </div>
    </>
  );
};

export default SingleProduct;
