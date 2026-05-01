// // import { Link } from "react-router-dom";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">

// //       {/* 🌿 Hero Section */}
// //       <div className="text-center py-28 px-6">
// //         <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
// //           🌾 Smart Agriculture <br />
// //           <span className="text-green-700">Powered by AI 🤖</span>
// //         </h1>

// //         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
// //           📊 Predict crop prices, analyze trends, and maximize profits with intelligent
// //           data-driven insights designed for modern farmers.
// //         </p>

// //         <Link
// //           to="/dashboard"
// //           className="bg-green-800 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-900 transition shadow-md"
// //         >
// //           🚀 Get Started →
// //         </Link>
// //       </div>

// //       {/* 🌱 Feature Cards */}
// //       <div className="grid md:grid-cols-4 gap-6 px-10 pb-20">
// //         {[
// //           {
// //             icon: "📊",
// //             title: "Price Trend Analysis",
// //             desc: "Understand market patterns with visual insights"
// //           },
// //           {
// //             icon: "🤖",
// //             title: "AI-Based Prediction",
// //             desc: "Forecast crop prices using ML models"
// //           },
// //           {
// //             icon: "💰",
// //             title: "Profit Optimization",
// //             desc: "Maximize returns with smart calculations"
// //           },
// //           {
// //             icon: "🌦️",
// //             title: "Seasonal Insights",
// //             desc: "Choose crops based on seasonal data"
// //           }
// //         ].map((item, index) => (
// //           <div
// //             key={index}
// //             className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
// //           >
// //             <div className="text-3xl mb-3">{item.icon}</div>

// //             <h3 className="font-semibold text-lg text-green-800 mb-2">
// //               {item.title}
// //             </h3>

// //             <p className="text-gray-600 text-sm">
// //               {item.desc}
// //             </p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* 🌾 Info Section */}
// //       <div className="bg-white py-16 px-6 text-center">
// //         <h2 className="text-3xl font-bold text-green-800 mb-4">
// //           🚜 Why AgroTrade?
// //         </h2>

// //         <p className="text-gray-600 max-w-3xl mx-auto">
// //           AgroTrade combines agriculture 🌱 with artificial intelligence 🤖 to help farmers
// //           make smarter decisions. From predicting prices 📈 to analyzing seasonal trends 🌦️,
// //           our platform ensures better planning, reduced risk, and increased profits 💰.
// //         </p>
// //       </div>

// //       {/* 🚜 CTA Section */}
// //       <div className="text-center py-16">
// //         <h2 className="text-2xl font-semibold text-green-900 mb-4">
// //           🌿 Start making smarter farming decisions today
// //         </h2>

// //         <Link
// //           to="/dashboard"
// //           className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition"
// //         >
// //           📊 Go to Dashboard
// //         </Link>
// //       </div>

// //     </div>
// //   );
// // }

// import { Link } from "react-router-dom";

// // 👇 import your image
// import homeBg from "../assets/home.jpeg";

// export default function Home() {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center relative"
//       style={{
//         backgroundImage: `url(${homeBg})`
//       }}
//     >
//       {/* 🔲 Dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* CONTENT */}
//       <div className="relative">

//         {/* Hero Section */}
//         <div className="text-center py-28 px-6">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             Smart Agriculture <br />
//             <span className="text-green-300">Powered by AI</span>
//           </h1>

//           <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
//             Predict crop prices, analyze trends, and maximize profits with intelligent
//             data-driven insights designed for modern farmers.
//           </p>

//           <Link
//             to="/dashboard"
//             className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-800 transition shadow-md"
//           >
//             Get Started →
//           </Link>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid md:grid-cols-4 gap-6 px-10 pb-20">
//           {[
//             {
//               icon: "📊",
//               title: "Price Trend Analysis",
//               desc: "Understand market patterns with visual insights"
//             },
//             {
//               icon: "🤖",
//               title: "AI-Based Prediction",
//               desc: "Forecast crop prices using ML models"
//             },
//             {
//               icon: "💰",
//               title: "Profit Optimization",
//               desc: "Maximize returns with smart calculations"
//             },
//             {
//               icon: "🌦️",
//               title: "Seasonal Insights",
//               desc: "Choose crops based on seasonal data"
//             }
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white/90 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
//             >
//               <div className="text-3xl mb-3">{item.icon}</div>

//               <h3 className="font-semibold text-lg text-green-800 mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 text-sm">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Info Section */}
//         <div className="bg-white/90 py-16 px-6 text-center">
//           <h2 className="text-3xl font-bold text-green-800 mb-4">
//             Why AgroTrade?
//           </h2>

//           <p className="text-gray-600 max-w-3xl mx-auto">
//             AgroTrade combines agriculture with artificial intelligence to help farmers
//             make smarter decisions. From predicting prices to analyzing seasonal trends,
//             our platform ensures better planning, reduced risk, and increased profits.
//           </p>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center py-16">
//           <h2 className="text-2xl font-semibold text-white mb-4">
//             Start making smarter farming decisions today
//           </h2>

//           {/* <Link
//             to="/dashboard"
//             className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition"
//           >
//             Go to Dashboard
//           </Link> */}
//         </div>

//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import homeBg from "../assets/home.jpeg";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${homeBg})`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative">

        {/* Hero Section */}
        <div className="text-center py-28 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Agriculture <br />
            <span className="text-green-300">Powered by AI</span>
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
            Predict crop prices, analyze trends, and maximize profits with intelligent
            data-driven insights designed for modern farmers.
          </p>

          {/* ✅ Redirect to signup */}
          <Link
            to="/signup"
            className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-800 transition shadow-md"
          >
            Get Started →
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6 px-10 pb-20">
          {[
            {
              icon: "📊",
              title: "Price Trend Analysis",
              desc: "Understand market patterns with visual insights"
            },
            {
              icon: "🤖",
              title: "AI-Based Prediction",
              desc: "Forecast crop prices using ML models"
            },
            {
              icon: "💰",
              title: "Profit Optimization",
              desc: "Maximize returns with smart calculations"
            },
            {
              icon: "🌦️",
              title: "Seasonal Insights",
              desc: "Choose crops based on seasonal data"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>

              <h3 className="font-semibold text-lg text-green-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white/90 py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Why AgroTrade?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            AgroTrade combines agriculture with artificial intelligence to help farmers
            make smarter decisions. From predicting prices to analyzing seasonal trends,
            our platform ensures better planning, reduced risk, and increased profits.
          </p>
        </div>

        {/* CTA Section (button removed) */}
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-white">
            Start making smarter farming decisions today
          </h2>
        </div>

      </div>
    </div>
  );
}