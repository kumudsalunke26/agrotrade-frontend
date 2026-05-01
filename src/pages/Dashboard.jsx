// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Label
// } from "recharts";

// export default function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/dashboard")
//       .then(res => res.json())
//       .then(resData => setData(resData))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-green-50 p-10">

//       {/* Title */}
//       <h1 className="text-3xl font-bold text-green-800 mb-8">
//         🌿 Crop Analytics Dashboard
//       </h1>

//       {/* Summary Cards */}
//       <div className="grid md:grid-cols-4 gap-6 mb-10">

//         <div className="bg-white p-6 shadow rounded-xl border-l-4 border-green-600">
//           <h3 className="text-gray-600">Average Crop Price</h3>
//           <p className="text-2xl font-bold text-green-700">
//             ₹ {data?.avg_price?.toFixed(2) || "--"}
//           </p>
//         </div>

//         <div className="bg-white p-6 shadow rounded-xl border-l-4 border-green-500">
//           <h3 className="text-gray-600">Most Profitable Crop</h3>
//           <p className="text-xl font-bold text-green-700">
//             {data?.most_profitable_crop || "--"}
//           </p>
//         </div>

//         <div className="bg-white p-6 shadow rounded-xl border-l-4 border-green-400">
//           <h3 className="text-gray-600">High-Risk Crop</h3>
//           <p className="text-xl font-bold text-green-700">
//             {data?.high_risk_crop || "--"}
//           </p>
//         </div>

//         <div className="bg-white p-6 shadow rounded-xl border-l-4 border-green-300">
//           <h3 className="text-gray-600">Best Season to Sell</h3>
//           <p className="text-xl font-bold text-green-700">
//             {data?.best_season || "--"}
//           </p>
//         </div>

//       </div>

//       {/* Charts */}
//       <div className="grid md:grid-cols-2 gap-8">

//         {/* 📈 Line Chart */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="font-semibold mb-4 text-green-700">
//             📈 Price Trend
//           </h2>

//           <div className="h-64">
//             {data ? (
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={data.trend}>
//                   <CartesianGrid strokeDasharray="3 3" />

//                   <XAxis dataKey="Month">
//                     <Label value="Month (1–12)" offset={-5} position="insideBottom" />
//                   </XAxis>

//                   <YAxis>
//                     <Label
//                       value="Price (₹ per Quintal)"
//                       angle={-90}
//                       position="insideLeft"
//                       style={{ textAnchor: "middle" }}
//                     />
//                   </YAxis>

//                   <Tooltip formatter={(value) => `₹ ${value.toFixed(2)}`} />

//                   <Line
//                     type="monotone"
//                     dataKey="Price_per_Quintal"
//                     stroke="#16a34a"
//                     strokeWidth={3}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             ) : (
//               <div className="h-full flex items-center justify-center text-gray-500">
//                 Loading...
//               </div>
//             )}
//           </div>
//         </div>

//         {/* 📊 Bar Chart */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="font-semibold mb-4 text-green-700">
//             📊 Crop Comparison
//           </h2>

//           <div className="h-64">
//             {data ? (
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={data.crop_data}>
//                   <CartesianGrid strokeDasharray="3 3" />

//                   <XAxis dataKey="Crop">
//                     <Label value="Crop Type" offset={-5} position="insideBottom" />
//                   </XAxis>

//                   <YAxis>
//                     <Label
//                       value="Average Price (₹ per Quintal)"
//                       angle={-90}
//                       position="insideLeft"
//                       style={{ textAnchor: "middle" }}
//                     />
//                   </YAxis>

//                   <Tooltip formatter={(value) => `₹ ${value.toFixed(2)}`} />

//                   <Bar dataKey="Price_per_Quintal" fill="#22c55e" />
//                 </BarChart>
//               </ResponsiveContainer>
//             ) : (
//               <div className="h-full flex items-center justify-center text-gray-500">
//                 Loading...
//               </div>
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Label
} from "recharts";

// 👇 IMPORT IMAGE FROM ASSETS
import dashboardBg from "../assets/dashboard.jpeg";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/dashboard")
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => console.error(err));
  }, []);

  return (
    <div
      className="min-h-screen p-10 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${dashboardBg})`
      }}
    >
      {/* 🔲 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* MAIN CONTENT */}
      <div className="relative">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-8">
          Crop Analytics Dashboard
        </h1>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white/90 p-6 shadow rounded-xl border-l-4 border-green-600">
            <h3 className="text-gray-600">Average Crop Price</h3>
            <p className="text-2xl font-bold text-green-700">
              ₹ {data?.avg_price?.toFixed(2) || "--"}
            </p>
          </div>

          <div className="bg-white/90 p-6 shadow rounded-xl border-l-4 border-green-500">
            <h3 className="text-gray-600">Most Profitable Crop</h3>
            <p className="text-xl font-bold text-green-700">
              {data?.most_profitable_crop || "--"}
            </p>
          </div>

          <div className="bg-white/90 p-6 shadow rounded-xl border-l-4 border-green-400">
            <h3 className="text-gray-600">High-Risk Crop</h3>
            <p className="text-xl font-bold text-green-700">
              {data?.high_risk_crop || "--"}
            </p>
          </div>

          <div className="bg-white/90 p-6 shadow rounded-xl border-l-4 border-green-300">
            <h3 className="text-gray-600">Best Season to Sell</h3>
            <p className="text-xl font-bold text-green-700">
              {data?.best_season || "--"}
            </p>
          </div>

        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Line Chart */}
          <div className="bg-white/90 p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4 text-green-700">
              Price Trend
            </h2>

            <div className="h-64">
              {data ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.trend}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="Month">
                      <Label value="Month (1–12)" offset={-5} position="insideBottom" />
                    </XAxis>

                    <YAxis>
                      <Label
                        value="Price (₹ per Quintal)"
                        angle={-90}
                        position="insideLeft"
                        style={{ textAnchor: "middle" }}
                      />
                    </YAxis>

                    <Tooltip formatter={(value) => `₹ ${value.toFixed(2)}`} />

                    <Line
                      type="monotone"
                      dataKey="Price_per_Quintal"
                      stroke="#16a34a"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  Loading...
                </div>
              )}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white/90 p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4 text-green-700">
              Crop Comparison
            </h2>

            <div className="h-64">
              {data ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.crop_data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="Crop">
                      <Label value="Crop Type" offset={-5} position="insideBottom" />
                    </XAxis>

                    <YAxis>
                      <Label
                        value="Average Price (₹ per Quintal)"
                        angle={-90}
                        position="insideLeft"
                        style={{ textAnchor: "middle" }}
                      />
                    </YAxis>

                    <Tooltip formatter={(value) => `₹ ${value.toFixed(2)}`} />

                    <Bar dataKey="Price_per_Quintal" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  Loading...
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}