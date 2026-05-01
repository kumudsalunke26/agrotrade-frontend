import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-green-700 tracking-wide">
        🌾 AgroTrade
      </h1>

      <div className="space-x-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-green-700 transition">Home</Link>
        <Link to="/dashboard" className="hover:text-green-700 transition">Dashboard</Link>
        <Link to="/prediction" className="hover:text-green-700 transition">Prediction</Link>
        <Link to="/profit" className="hover:text-green-700 transition">Profit</Link>
        <Link to="/season" className="hover:text-green-700 transition">Seasonal</Link>
        <Link to="/about" className="hover:text-green-700 transition">About Us</Link>
        <Link
          to="/login"
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
        >
          Login
        </Link>
         <Link
          to="/signup"
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
        >
          SignUp
        </Link>
      </div>
    </nav>
  );
}
