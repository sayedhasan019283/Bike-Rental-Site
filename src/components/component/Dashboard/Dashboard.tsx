import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Dashboard = () => {
      // Dummy data for the line chart and pie chart
  const lineChartData = [
    { name: '1st', value: 1000 },
    { name: '2nd', value: 4000 },
    { name: '3rd', value: 6000 },
    { name: '4th', value: 2000 },
    { name: '5th', value: 5000 },
    { name: '6th', value: 1000 },
    { name: '7th', value: 4000 }
  ];

  const pieChartData = [
    { name: 'Orders', value: 70 },
    { name: 'Pending', value: 30 },
    { name: 'Delivered', value: 20 }
  ];

  const COLORS = ['#4A6CF7', '#FFA500', '#FF4500'];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Summary Section */}
      <div className="flex justify-around mb-8">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-40">
          <h3 className="text-2xl text-blue-600">5390</h3>
          <p className="text-gray-600">Order Received</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-40">
          <h3 className="text-2xl text-blue-600">2390</h3>
          <p className="text-gray-600">Total Charges</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-40">
          <h3 className="text-2xl text-blue-600">$2947</h3>
          <p className="text-gray-600">Total Earnings</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex justify-around">
        {/* Line Chart */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-1/2">
          <h4 className="text-lg font-semibold mb-4">Product Sales</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineChartData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4A6CF7" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-1/3">
          <h4 className="text-lg font-semibold mb-4">Order Status</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center mt-2 font-medium">Total Order: 120</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;