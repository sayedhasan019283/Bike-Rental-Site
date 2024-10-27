
const History = () => {
//   const { data, error, isLoading } = useGetRentalsQuery(undefined);
//   const [activeTab, setActiveTab] = useState<'paid' | 'unpaid'>('unpaid');
//   const rentals = data?.data;

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading rentals</div>;

//   // Filter based on totalCost
//   const paidRentals = rentals?.filter((rental: { totalCost: number }) => rental.totalCost > 0);
//   const unpaidRentals = rentals?.filter((rental: { totalCost: number }) => rental.totalCost === 0);

//   console.log("Paid Rentals: ", paidRentals);
//   console.log("Unpaid Rentals: ", unpaidRentals);

  return (
    // <div>
    //   <div className="tabs flex space-x-4">
    //     <button
    //       onClick={() => setActiveTab('unpaid')}
    //       className={`px-4 py-2 ${activeTab === 'unpaid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
    //     >
    //       Unpaid
    //     </button>
    //     <button
    //       onClick={() => setActiveTab('paid')}
    //       className={`px-4 py-2 ${activeTab === 'paid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
    //     >
    //       Paid
    //     </button>
    //   </div>

    //   <div className="tab-content mt-4">
    //     {activeTab === 'unpaid' && (
    //       <div>
    //         {unpaidRentals?.length ? (
    //           unpaidRentals.map((rental, index) => {
    //             console.log("Unpaid Rental:", rental);  // Log each rental object
    //             return (
    //               <div key={rental.bikeId || index}>
    //                 <p>Bike ID: {rental?.bikeId || "N/A"}</p>
    //                 <p>hi </p>
    //               </div>
    //             );
    //           })
    //         ) : (
    //           <p>No unpaid rentals found.</p>
    //         )}
    //       </div>
    //     )}

    //     {activeTab === 'paid' && (
    //       <div>
    //         {paidRentals?.length ? (
    //           paidRentals.map((rental, index) => {
    //             console.log("Paid Rental:", rental);  // Log each rental object
    //             return (
    //               <div key={rental.bikeId || index}>
    //                 <p>Total Cost: {rental.totalCost}</p>
    //               </div>
    //             );
    //           })
    //         ) : (
    //           <p>No paid rentals found.</p>
    //         )}
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="text-2xl text-center font-bold">
        HI
    </div>
  );
};

export default History;
