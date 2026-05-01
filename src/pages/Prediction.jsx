// import { useState } from "react";

// export default function Prediction() {

//   const [formData, setFormData] = useState({
    
//   "Crop": "",
//   "Market": "",
//   "Month": "",
//   "State": "",
//   "Year": "",
//   "Season": "",
//   "Cost_per_Quintal": ""

//   });

//   const [predictedPrice, setPredictedPrice] = useState(null);

//   // handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // 🔥 REAL PREDICTION FUNCTION
//   const handlePredict = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/predict" , {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           ...formData,
//           State: "Maharashtra",
//           Year: 2024,
//           Season: "Rabi",
//           Cost_per_Quintal: 1000
//         })
//       });

//       const data = await response.json();

//       if (data.error) {
//         alert(data.error);
//       } else {
//         setPredictedPrice(`₹ ${data.predicted_price} per quintal`);
//       }

//     } catch (error) {
//       alert("Backend not connected");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-green-50 p-10">

//       <h1 className="text-3xl font-bold text-green-700 mb-8">
//         ML Crop Price Prediction
//       </h1>

//       <div className="bg-white p-8 rounded-xl shadow max-w-lg">

//         <div className="space-y-4">

//           <select
//             name="Crop"
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           >
//             <option value="">Select Crop</option>
//             <option>Wheat</option>
//             <option>Soybean</option>
//             <option>Rice</option>
//             <option>Cotton</option>
//             <option>Sugarcane</option>
//             <option>Maize</option>
//           </select>

//           <select
//             name="Market"
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           >
//             <option value="">Select Market</option>
//             <option>Pune</option>
//             <option>Nashik</option>
//             <option>Nagpur</option>
//             <option>Aurangabad</option>
//           </select>

//           <select
//             name="Month"
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           >
//             <option value="">Select Year</option>
//             <option>2022</option>
//             <option>2023</option>
//             <option>2024</option>
//           </select>

//           <select
//             name="Year"
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           >
//             <option value="">Select Month</option>
//             <option value="1">January</option>
//             <option value="2">February</option>
//             <option value="3">March</option>
//             <option value="4">April</option>
//             <option value="5">May</option>
//             <option value="6">June</option>
//             <option value="7">July</option>
//             <option value="8">August</option>
//             <option value="9">September</option>
//             <option value="10">October</option>
//             <option value="11">November</option>
//             <option value="12">December</option>
//           </select>

//           <button
//             onClick={handlePredict}
//             className="w-full bg-green-700 text-white py-2 rounded"
//           >
//             Predict Price
//           </button>
//         </div>

//         {predictedPrice && (
//           <div className="mt-6 bg-green-100 p-4 rounded text-center">
//             <h3 className="font-semibold">Predicted Price</h3>
//             <p className="text-2xl font-bold text-green-700">
//               {predictedPrice}
//             </p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

import { useState } from "react";

// 👇 import your background image
import priceBg from "../assets/price.jpeg";

export default function Prediction() {

  const [formData, setFormData] = useState({
    Crop: "",
    Market: "",
    Month: "",
    State: "Maharashtra",
    Year: "",
    Season: "",
    Cost_per_Quintal: ""
  });

  const [predictedPrice, setPredictedPrice] = useState(null);
  const [profit, setProfit] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePredict = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
      } else {
        setPredictedPrice(`₹ ${data.predicted_price} per quintal`);
        setProfit(`₹ ${data.profit}`);
      }

    } catch (error) {
      alert("Backend not connected ❌");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${priceBg})`
      }}
    >
      {/* 🔲 Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* MAIN CARD */}
      <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-xl border border-green-200">

        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          Crop Price Predictor
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Get smart predictions for better farming decisions
        </p>

        <div className="space-y-4">

          <select name="Crop" onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg">
            <option value="">Select Crop</option>
            <option>Wheat</option>
            <option>Soybean</option>
            <option>Rice</option>
            <option>Cotton</option>
            <option>Sugarcane</option>
            <option>Maize</option>
          </select>

          <select name="Market" onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg">
            <option value="">Select Market</option>
            <option>Pune</option>
            <option>Nashik</option>
            <option>Nagpur</option>
            <option>Aurangabad</option>
          </select>

          <select name="Year" onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg">
            <option value="">Select Year</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>

          <select name="Month" onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg">
            <option value="">Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <select name="Season" onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg">
            <option value="">Select Season</option>
            <option>Rabi</option>
            <option>Kharif</option>
            <option>Zaid</option>
          </select>

          <input
            type="number"
            name="Cost_per_Quintal"
            placeholder="Enter Cost per Quintal"
            onChange={handleChange}
            className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 p-3 rounded-lg"
          />

          <button
            onClick={handlePredict}
            className="w-full bg-green-700 hover:bg-green-800 transition duration-300 text-white py-3 rounded-lg font-semibold shadow-md"
          >
            Predict Price
          </button>

        </div>

        {predictedPrice && (
          <div className="mt-6 bg-green-100 border border-green-300 p-5 rounded-xl text-center shadow-inner">
            <h3 className="font-semibold text-green-800 mb-2">
              Prediction Result
            </h3>
            <p className="text-2xl font-bold text-green-700">
              {predictedPrice}
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Profit: <span className="font-semibold text-green-800">{profit}</span>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}