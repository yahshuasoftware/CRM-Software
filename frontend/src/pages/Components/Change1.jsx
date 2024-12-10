import React, { useState } from 'react';

export default function LoginPage() {
  const [loginType, setLoginType] = useState('Employee'); // Default login type
  const [company, setCompany] = useState('Company A'); // Default company

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.w3schools.com/howto/rain.mp4" // Replace with your 3D video URL
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-black bg-opacity-50 px-4">
        <div className="w-full max-w-md p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-md sm:p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="loginType"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Login as
              </label>
              <select
                id="loginType"
                value={loginType}
                onChange={handleLoginTypeChange}
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Company
              </label>
              <select
                id="company"
                value={company}
                onChange={handleCompanyChange}
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Company A">Company A</option>
                <option value="Company B">Company B</option>
                <option value="Company C">Company C</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Tailwind Submit Button */}
            <button
              type="submit"
              className="w-full max-w-xs py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-full transition-all duration-300 hover:brightness-105 focus:outline-none"
            >
              Login as {loginType} at {company}
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
