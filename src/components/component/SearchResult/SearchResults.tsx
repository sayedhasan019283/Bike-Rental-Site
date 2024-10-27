import { useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";

const SearchResults = () => {
  const { bikes } = useAppSelector((state) => state.bike); // Destructure the bikes array
  console.log("Redux state bikes:", bikes);

  useEffect(() => {}, [bikes]);

  return (
    <div>
      <h2>Bikes List</h2>
      <ul>
        {bikes.map((bike) => (
          <p key={bike.name}>
            {bike.name} - {bike.model}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
