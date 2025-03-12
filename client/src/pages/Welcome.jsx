import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col">
      <div className="text-center pt-20 pb-12 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          Welcome to MemoWise
        </h1>
        <p className="text-xl text-gray-600">
          Your ideas deserve a beautiful home
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Create Notes
            </h3>
            <p className="text-gray-600">
              Capture your thoughts quickly and efficiently
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Smart Tagging
            </h3>
            <p className="text-gray-600">
              Categorize and connect your ideas effortlessly
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Find Fast
            </h3>
            <p className="text-gray-600">
              Powerful search helps you find notes instantly
            </p>
          </div>
        </div>
      </div>

      <div className="text-center px-4 pb-20 flex-grow flex flex-col justify-center">
        <p className="text-gray-600 mb-8 text-lg">
          Join thousands of users who have already streamlined their note-taking
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center">
          <Link
            to="/login"
            className="px-8 py-4 text-base font-medium rounded-md border border-gray-300 text-gray-700 
                    bg-white hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                    shadow-sm transition-all duration-150"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-8 py-4 text-base font-medium rounded-md border border-blue-500 text-white 
                    bg-blue-600 hover:bg-blue-700 hover:border-blue-600
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                    shadow-sm transition-all duration-150"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 py-6 mt-auto">
        <p className="text-center text-sm text-gray-500">
          © 2025 MemoWise. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
