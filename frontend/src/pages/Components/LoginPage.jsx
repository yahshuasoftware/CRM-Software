import React, { useState } from "react";

export default function LoginPage() {
  const [loginType, setLoginType] = useState("Employee");
  const [company, setCompany] = useState("Yashua Software Limited");

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log({ loginType, company });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md bg-opacity-90 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="loginType"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Login as
            </label>
            <select
              name="loginType"
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
              name="company"
              id="company"
              value={company}
              onChange={handleCompanyChange}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Yashua Software Limited">
                Yashua Software Limited
              </option>
              <option value="company b">Company B</option>
              <option value="company c">Company C</option>
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
              placeholder={`Enter your ${
                loginType === "Admin" ? "admin" : "employee"
              } email`}
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
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password
          </a>
        </p>
      </div>
    </div>
  );
}
