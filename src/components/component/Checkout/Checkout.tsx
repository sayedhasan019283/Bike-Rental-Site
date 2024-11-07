import { useParams } from "react-router-dom";
import {
  useGetProfileQuery,
  useGetSingleBookingQuery,
  usePaymentbookingBikeMutation,
} from "../../../redux/Bikes/BikesApi";

const Checkout = () => {
  const { id } = useParams();
  const { data: singleBooking, isLoading: isBookingLoading } =
    useGetSingleBookingQuery(id);

  const { data: user, isLoading: isUserLoading } =
    useGetProfileQuery(undefined);

  const [paymentBookingBike] = usePaymentbookingBikeMutation();

  const totalCost = singleBooking?.data?.totalCost;
  console.log(totalCost);
  const userInfo = user?.data;
  console.log(userInfo);

  const handleSubmit = async () => {
    const data = { totalCost, userInfo };
    console.log({ data });
    try {
      const res = await paymentBookingBike(data).unwrap();
      console.log({ res });
      window.location.href = res.data.payment_url;
    } catch (error) {
      console.log({ error });
    }
  };

  const handleReload = () => {
    window.location.reload();
  }
  // Display a loading message while data is being fetched
  if (isBookingLoading || isUserLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <div>
        <div className="mb-8 border p-5 rounded">
          <h3 className="text-xl font-semibold mb-4">User Information</h3>
          {user && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 text-left">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.data?.name}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 text-left">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.data?.email}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 text-left">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={user?.data?.phone}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 text-left">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={user?.data?.address}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Car
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  StartTime
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  endTime
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  PerHour
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">name</td>
                <td className="py-3 px-4">startTime</td>
                <td className="py-3 px-4">endTime</td>
                <td className="py-3 px-4">perHour</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-8">
            <p>
              <span className="font-semibold text-lg">TotalCost :</span>10
              {totalCost}
            </p>
            <button className="bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 mr-3"
            onClick={handleReload}
            >
              {" "}
              Reload
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 "
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
