import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

const Navbar = ({ setQuery }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between">
      <div className="mb-3 sm:mb-0">
        <Link
          to="/"
          className="text-blue-600 font-bold text-xl hover:text-blue-800 transition-colors"
        >
          MemoWise
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        className="w-full sm:w-64 md:w-80 px-3 py-2 mb-3 sm:mb-0 sm:mx-4 border border-gray-300 rounded-md 
                 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <div className="flex flex-wrap items-center justify-center gap-3">
        {user ? (
          <>
            <span className="text-gray-700 text-lg font-medium">
              Hi, {user.name}
            </span>

            <Link
              onClick={logout}
              to="/"
              className="px-4 py-2 text-sm font-medium rounded-md border border-red-500 text-white 
           bg-red-500 hover:bg-red-600 hover:border-red-600
           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 
           shadow-sm transition-all duration-150"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 
           bg-white hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300
           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
           shadow-sm transition-all duration-150"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium rounded-md border border-blue-500 text-white 
           bg-blue-600 hover:bg-blue-700 hover:border-blue-600
           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
           shadow-sm transition-all duration-150"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
