import React, { useEffect, useState } from "react";
import {
  useGetRentalsQuery,
  useGetBikesQuery,
  useReturnRentalMutation,
} from "../../../redux/Bikes/BikesApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
// import { NavLink } from "react-router-dom";

interface Bike {
  _id: string;
  name: string;
  description: string;
  price: number;
  photo?: string;
  isAvailable: boolean;
  // Include other fields as needed
}

interface Rental {
  _id: string;
  userId: string;
  bikeId: string;
  startTime: string;
  returnTime: string;
  totalCost: number;
  isReturned: boolean;
}

const AllRentals: React.FC = () => {
  const {
    data: rentals,
    error: rentalsError,
    isLoading: rentalsLoading,
    refetch,
  } = useGetRentalsQuery(undefined);
  const {
    data: bikes,
    error: bikesError,
    isLoading: bikesLoading,
    refetch : bikeRefetch
  } = useGetBikesQuery(undefined); // Assume this fetches all bikes
  const [returnRental] = useReturnRentalMutation();
  // Define the type for bikeMap
  const [bikeMap, setBikeMap] = useState<Record<string, Bike>>({});

  useEffect(() => {
    if (bikes) {
      // Create a map of bikeId to bike data
      const bikeDataMap = bikes.data.reduce(
        (acc: Record<string, Bike>, bike: Bike) => {
          acc[bike._id] = bike;
          return acc;
        },
        {}
      );
      setBikeMap(bikeDataMap);
    }
  }, [bikes]);

  const handleReturn = async (id: string) => {
    
   try {
    await returnRental(id).unwrap();
    console.log(id)
    Swal.fire({
        icon: "success",
        title: "Bike Returned Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch()
      bikeRefetch()
   } catch (error) {
    console.log(error)
   }
  };

  if (rentalsLoading || bikesLoading) return <p>Loading...</p>;
  if (rentalsError) return <p>Error fetching rentals.</p>;
  if (bikesError) return <p>Error fetching bikes.</p>;

  return (
    <div>
      <h2 className="text-3xl mb-2 font-bold text-center mt-5">
        Your <span className="text-red-500">All</span> Rentals
      </h2>
      <div className="flex justify-center mt-2 mb-6">
        <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/5 mx-auto">
        {rentals?.data.map((rental: Rental) => {
          const bike = bikeMap[rental.bikeId];

          return (
            <div className="grid-cols-1 border border-red-500 p-5 border-r-2 ">
              <div>
                {bike?.photo && (
                  <img
                    src={bike.photo}
                    alt={bike.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                )}
              </div>
              <div className="flex">
                <div>
                  <h1>{bike?.name}</h1>
                  <p>location</p>
                  <button
                    onClick={() => handleReturn(rental?._id)}
                    className="btn bg-red-500 text-white py-2 px-4 mt-3 font-bold"
                  >
                    Return
                  </button>
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
          );
        })}
      </div>
    </div>
  );
};

export default AllRentals;
