// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
//   Label
// } from "recharts";

// export default function SeasonalAnalysis() {
//   const [season, setSeason] = useState("");
//   const [result, setResult] = useState(null);

//   const handleChange = async (e) => {
//     const selectedSeason = e.target.value;
//     setSeason(selectedSeason);

//     if (selectedSeason === "Select Season") return;

//     try {
//       const res = await fetch("http://127.0.0.1:5000/seasonal-analysis", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ season: selectedSeason })
//       });

//       const data = await res.json();

//       if (data.error) {
//         alert(data.error);
//       } else {
//         setResult(data);
//       }

//     } catch (err) {
//       console.error(err);
//       alert("Server error");
//     }
//   };

//   // 📈 Stock-like trend data
//   const chartData = result
//     ? [
//         { time: "Past", price: result.average_price },
//         {
//           time: "Present",
//           price: (result.average_price + result.predicted_price) / 2
//         },
//         { time: "Future", price: result.predicted_price }
//       ]
//     : [];

//   return (
//     <div className="min-h-screen bg-green-50 p-10">

//       <h1 className="text-3xl font-bold text-green-700 mb-8">
//         📈 Seasonal Trend Forecast
//       </h1>

//       <div className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto">

//         {/* Dropdown */}
//         <select
//           value={season}
//           onChange={handleChange}
//           className="border p-3 rounded mb-6 w-full text-lg"
//         >
//           <option>Select Season</option>
//           <option>Rabi</option>
//           <option>Kharif</option>
//           <option>Zaid</option>
//         </select>

//         {/* Line Chart */}
//         <div className="h-80 mb-6">
//           {result ? (
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />

//                 {/* X Axis */}
//                 <XAxis dataKey="time">
//                   <Label
//                     value="Time (Past → Present → Future)"
//                     offset={-5}
//                     position="insideBottom"
//                   />
//                 </XAxis>

//                 {/* Y Axis */}
//                 <YAxis>
//                   <Label
//                     value="Price (₹ per Quintal)"
//                     angle={-90}
//                     position="insideLeft"
//                     style={{ textAnchor: "middle" }}
//                   />
//                 </YAxis>

//                 {/* Tooltip */}
//                 <Tooltip formatter={(value) => `₹ ${value.toFixed(2)}`} />

//                 {/* Line */}
//                 <Line
//                   type="monotone"
//                   dataKey="price"
//                   stroke="#16a34a"
//                   strokeWidth={3}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="h-full flex items-center justify-center text-gray-500">
//               Select a season to view trend
//             </div>
//           )}
//         </div>

//         {/* Stats Cards */}
//         {result && (
//           <div className="grid grid-cols-2 gap-4 mb-6">

//             <div className="bg-green-100 p-4 rounded text-center">
//               <h3 className="font-semibold">📊 Avg Price</h3>
//               <p className="text-xl font-bold text-green-700">
//                 ₹{result.average_price.toFixed(2)}
//               </p>
//             </div>

//             <div className="bg-blue-100 p-4 rounded text-center">
//               <h3 className="font-semibold">🤖 Predicted Price</h3>
//               <p className="text-xl font-bold text-blue-700">
//                 ₹{result.predicted_price.toFixed(2)}
//               </p>
//             </div>

//           </div>
//         )}

//         {/* Insight */}
//         {result && (
//           <div className="bg-gray-100 p-4 rounded text-center">
//             <p className="font-semibold text-gray-800">
//               Insight: {result.insight}
//             </p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Label
} from "recharts";

// 👇 IMPORT YOUR IMAGE
import cropImage from "../assets/crop.jpeg";

export default function SeasonalAnalysis() {
  const [season, setSeason] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = async (e) => {
    const selectedSeason = e.target.value;
    setSeason(selectedSeason);

    if (selectedSeason === "Select Season") return;

    try {
      const res = await fetch("http://127.0.0.1:5000/seasonal-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ season: selectedSeason })
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
      } else {
        setResult(data);
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  const chartData = result
    ? [
        { time: "Past", price: result.average_price },
        {
          time: "Present",
          price: (result.average_price + result.predicted_price) / 2
        },
        { time: "Future", price: result.predicted_price }
      ]
    : [];

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${cropImage})` // 👈 your image applied
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* MAIN CARD */}
      <div className="relative bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-4xl border">

        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Seasonal Trend Forecast
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Analyze seasonal price trends using past and predicted data
        </p>

        {/* Dropdown */}
        <select
          value={season}
          onChange={handleChange}
          className="border border-green-400 focus:ring-2 focus:ring-green-600 p-3 rounded-lg mb-6 w-full text-lg"
        >
          <option>Select Season</option>
          <option>Rabi</option>
          <option>Kharif</option>
          <option>Zaid</option>
        </select>

        {/* Chart */}
        <div className="h-80 mb-6">
          {result ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="time">
                  <Label
                    value="Time (Past → Present → Future)"
                    offset={-5}
                    position="insideBottom"
                  />
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
                  dataKey="price"
                  stroke="#166534"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-300">
              Select a season to view trend
            </div>
          )}
        </div>

        {/* Cards */}
        {result && (
          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="bg-green-100 p-5 rounded-xl text-center shadow">
              <h3 className="font-semibold text-green-900 mb-1">
                Average Price
              </h3>
              <p className="text-2xl font-bold text-green-800">
                ₹{result.average_price.toFixed(2)}
              </p>
            </div>

            <div className="bg-blue-100 p-5 rounded-xl text-center shadow">
              <h3 className="font-semibold text-blue-900 mb-1">
                Predicted Price
              </h3>
              <p className="text-2xl font-bold text-blue-800">
                ₹{result.predicted_price.toFixed(2)}
              </p>
            </div>

          </div>
        )}

        {/* Insight */}
        {result && (
          <div className="bg-gray-100 p-4 rounded-xl text-center">
            <p className="font-semibold text-gray-800">
              Insight: {result.insight}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}