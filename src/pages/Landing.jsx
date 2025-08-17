import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="min-h-screen bg-gray-50 flex flex-col">
      </div>
      <nav className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">Smart Attendance</h1>
        <div>
          <button
            onClick={() => navigate("/login")}
            className="mr-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
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

      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 py-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Smart Attendance System for Colleges
          </h2>
          <p className="text-gray-600 mb-6">
            Simplify attendance management with AI-powered tracking, teacher
            dashboards, and secure student data management.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Attendance illustration"
            className="w-80"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12 px-8">
        <h3 className="text-2xl font-bold text-center mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">AI Attendance</h4>
            <p className="text-gray-600">
              Automated tracking using CCTV integration.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Teacher Dashboard</h4>
            <p className="text-gray-600">
              Manage classes, students, and reports easily.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Secure Data</h4>
            <p className="text-gray-600">
              Only authorized users can log in and sign up.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-6 text-gray-600">
        © {new Date().getFullYear()} Smart Attendance. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
