import { useGetAllRentalsQuery } from "../../../redux/Bikes/BikesApi";

const History = () => {

const {data : order} = useGetAllRentalsQuery(undefined)
console.log(order?.data)

  return (
   
    <div className="text-2xl text-center font-bold">
        HI
    </div>
  );
};

export default History;
