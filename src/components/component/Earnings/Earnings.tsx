const Earnings = () => {
  const data = [
    { amount: '$435.83', period: 'Today', trend: 'trend1' },
    { amount: '$598.00', period: 'This week', trend: 'trend2' },
    { amount: '$1,310.33', period: 'This month', trend: 'trend3' },
  ];
  

  return (
    <div>
        <div className="text-2xl font-bold"><h2 className="text-3xl mb-2 font-bold text-center ">
              All <span className="text-red-500">Earning</span> Statement!
            </h2>
            <div className="flex justify-center mt-2 mb-6">
              <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
            </div></div>
        <div className="flex justify-center items-center h-screen  gap-6">
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-6 w-40 text-center shadow-md">
          {/* Placeholder for trend line */}
          <div className={`h-8 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full mb-4 ${item.trend}`}></div>
          <h2 className="text-xl font-semibold">{item.amount}</h2>
          <p className="text-gray-500">{item.period}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Earnings;
