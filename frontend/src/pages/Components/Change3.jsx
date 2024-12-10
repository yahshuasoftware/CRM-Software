import React, { useState } from 'react';

export default function LoginPage() {
  const [loginType, setLoginType] = useState('Employee'); // Default login type
  const [company, setCompany] = useState('Company A'); // Default company
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Hardcoded credentials
  const validCredentials = {
    username: 'admin',
    password: 'password123',
  };

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === validCredentials.username && password === validCredentials.password) {
      alert(`Welcome ${loginType} at ${company}! Login successful.`);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid username or password');
    }
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
          <form onSubmit={handleLogin}>
            {/* Login Type Dropdown */}
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
                className="w-full px-4 py-2 text-sm border rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold transition-all duration-300 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            {/* Company Dropdown */}
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
                className="w-full px-4 py-2 text-sm border rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold transition-all duration-300 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="Company A">Company A</option>
                <option value="Company B">Company B</option>
                <option value="Company C">Company C</option>
              </select>
            </div>

            {/* Username Input */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 text-sm border border-yellow-500 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold transition-all duration-300 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Input */}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 text-sm border border-yellow-500 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold transition-all duration-300 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full max-w-xs py-2 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-full transition-all duration-300 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Forgot your password?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
