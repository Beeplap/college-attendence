import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      {/* Logo / Title */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Smart Attendance
      </Link>

      {/* Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/features" className="text-gray-700 hover:text-blue-600">
          Features
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </div>

      {/* Buttons */}
      <div>
        <button
          onClick={() => navigate("/login")}
          className="mr-3 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
