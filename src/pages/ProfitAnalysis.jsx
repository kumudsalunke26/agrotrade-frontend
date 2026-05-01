// // export default function ProfitAnalysis() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 p-10">

// //       <h1 className="text-3xl font-bold text-green-700 mb-8">
// //         Profit Analysis
// //       </h1>

// //       <div className="bg-white p-8 rounded-xl shadow max-w-lg">

// //         <input
// //           placeholder="Enter Production Cost"
// //           className="w-full border p-2 rounded mb-4"
// //         />

// //         <button className="w-full bg-green-700 text-white py-2 rounded">
// //           Calculate Profit
// //         </button>

// //         <div className="mt-6 bg-green-100 p-4 rounded text-center">
// //           <h3 className="font-semibold">Expected Profit</h3>
// //           <p className="text-xl font-bold text-green-700">
// //             ₹ 1,200 Profit
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // import { useState } from "react";

// // export default function ProfitAnalysis() {

// //   const [cost, setCost] = useState("");
// //   const [month, setMonth] = useState("");
// //   const [profit, setProfit] = useState(null);
// //   const [price, setPrice] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleCalculate = async () => {

// //     if (!cost || !month) {
// //       alert("Please fill all fields");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const response = await fetch("http://127.0.0.1:5000/predict", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify({
// //           Month: month,
// //           Cost_per_Quintal: cost
// //         })
// //       });

// //       const data = await response.json();

// //       if (data.error) {
// //         alert(data.error);
// //       } else {
// //         const predictedPrice = Number(data.predicted_price);

// //         setPrice(predictedPrice);
// //         setProfit(predictedPrice - Number(cost));
// //       }

// //       setLoading(false);

// //     } catch (error) {
// //       setLoading(false);
// //       alert("Backend not connected");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-10">

// //       <h1 className="text-3xl font-bold text-green-700 mb-8">
// //         Profit Analysis
// //       </h1>

// //       <div className="bg-white p-8 rounded-xl shadow max-w-lg">

// //         {/* Month Dropdown */}
// //         <select
// //           value={month}
// //           onChange={(e) => setMonth(e.target.value)}
// //           className="w-full border p-2 rounded mb-4"
// //         >
// //           <option value="">Select Month</option>
// //           <option>January</option>
// //           <option>February</option>
// //           <option>March</option>
// //           <option>April</option>
// //           <option>May</option>
// //           <option>June</option>
// //           <option>July</option>
// //           <option>August</option>
// //           <option>September</option>
// //           <option>October</option>
// //           <option>November</option>
// //           <option>December</option>
// //         </select>

// //         {/* Cost Input */}
// //         <input
// //           type="number"
// //           placeholder="Enter Production Cost"
// //           value={cost}
// //           onChange={(e) => setCost(e.target.value)}
// //           className="w-full border p-2 rounded mb-4"
// //         />

// //         {/* Button */}
// //         <button
// //           onClick={handleCalculate}
// //           className="w-full bg-green-700 text-white py-2 rounded"
// //         >
// //           {loading ? "Calculating..." : "Calculate Profit"}
// //         </button>

// //         {/* Result */}
// //         {profit !== null && (
// //           <div className="mt-6 bg-green-100 p-4 rounded text-center">
// //             <h3 className="font-semibold">Profit Analysis Result</h3>

// //             <p><b>Predicted Price:</b> ₹ {price}</p>
// //             <p><b>Production Cost:</b> ₹ {cost}</p>

// //             <p className="text-xl font-bold text-green-700 mt-2">
// //               Profit: ₹ {profit}
// //             </p>
// //           </div>
// //         )}

// //       </div>
// //     </div>
// //   );
// // }




// import React, { useState } from "react";

// export default function ProfitAnalysis() {
//   const [form, setForm] = useState({
//     crop: "",
//     season: "",
//     state: "",
//     market: "",
//     month: "",
//     year: "",
//     cost: ""
//   });

//   const [result, setResult] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleCalculate = async () => {
//     try {
//       const res = await fetch("http://127.0.0.1:5000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           crop: form.crop,
//           season: form.season,
//           state: form.state,
//           market: form.market,
//           month: Number(form.month),
//           year: Number(form.year),
//           cost: Number(form.cost)
//         })
//       });

//       const data = await res.json();

//       if (data.error) {
//         alert(data.error);
//       } else {
//         setResult(data);
//       }

//     } catch (error) {
//       console.error(error);
//       alert("Server error");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-green-50 p-10">

//       <h1 className="text-3xl font-bold text-green-700 mb-8">
//         Profit Analysis
//       </h1>

//       <div className="bg-white p-8 rounded-xl shadow max-w-lg space-y-3">

//         <input name="crop" placeholder="Crop" onChange={handleChange} className="w-full border p-2 rounded"/>
//         <input name="season" placeholder="Season" onChange={handleChange} className="w-full border p-2 rounded"/>
//         <input name="state" placeholder="State" onChange={handleChange} className="w-full border p-2 rounded"/>
//         <input name="market" placeholder="Market" onChange={handleChange} className="w-full border p-2 rounded"/>
//         <input name="month" type="number" placeholder="Month (1-12)" onChange={handleChange} className="w-full border p-2 rounded"/>
//         <input name="year" type="number" placeholder="Year" onChange={handleChange} className="w-full border p-2 rounded"/>
//         <input name="cost" type="number" placeholder="Cost per Quintal" onChange={handleChange} className="w-full border p-2 rounded"/>

//         <button
//           onClick={handleCalculate}
//           className="w-full bg-green-700 text-white py-2 rounded"
//         >
//           Calculate Profit
//         </button>

//         {result && (
//           <div className="mt-6 bg-green-100 p-4 rounded text-center">
//             <h3 className="font-semibold">Result</h3>

//             <p className="text-lg text-gray-700">
//               Predicted Price: ₹ {result.predicted_price.toFixed(2)}
//             </p>

//             <p className="text-xl font-bold text-green-700">
//               Profit: ₹ {result.profit.toFixed(2)}
//             </p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

// 👇 import your new image
import profitBg from "../assets/profitfinal.jpeg";

export default function ProfitAnalysis() {
  const [form, setForm] = useState({
    crop: "",
    season: "",
    state: "",
    market: "",
    month: "",
    year: "",
    cost: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCalculate = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          crop: form.crop,
          season: form.season,
          state: form.state,
          market: form.market,
          month: Number(form.month),
          year: Number(form.year),
          cost: Number(form.cost)
        })
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
      } else {
        setResult(data);
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${profitBg})`
      }}
    >
      {/* 🔲 Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* MAIN CARD */}
      <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-xl border border-green-200">

        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Profit Analysis
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Estimate your expected profit based on crop and market data
        </p>

        <div className="space-y-4">

          <input
            name="crop"
            placeholder="Crop"
            onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg"
          />

          <input
            name="season"
            placeholder="Season"
            onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg"
          />

          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg"
          />

          <input
            name="market"
            placeholder="Market"
            onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg"
          />

          <input
            name="month"
            type="number"
            placeholder="Month (1-12)"
            onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg"
          />

          <input
            name="year"
            type="number"
            placeholder="Year"
            onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg"
          />

          <input
            name="cost"
            type="number"
            placeholder="Cost per Quintal"
            onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg"
          />

          <button
            onClick={handleCalculate}
            className="w-full bg-green-700 hover:bg-green-800 transition duration-300 text-white py-3 rounded-lg font-semibold shadow-md"
          >
            Calculate Profit
          </button>

        </div>

        {result && (
          <div className="mt-6 bg-green-100 border border-green-300 p-5 rounded-xl text-center shadow-inner">
            <h3 className="font-semibold text-green-800 mb-2">
              Result
            </h3>

            <p className="text-lg text-gray-700">
              Predicted Price: ₹ {result.predicted_price.toFixed(2)}
            </p>

            <p className="text-xl font-bold text-green-700 mt-2">
              Profit: ₹ {result.profit.toFixed(2)}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}