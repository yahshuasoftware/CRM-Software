import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginType, setLoginType] = useState("Employee");
  const [company, setCompany] = useState("Yashua Software Limited");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for form fields
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    try {
      // Make an API request to your backend for authentication
      const response = await fetch("https://localhost:500/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, company, loginType }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Login successful!");
        setErrorMessage("");

        // Redirect to the DepartmentList page after successful login
        navigate("/");  // This will navigate to the root route (DepartmentList page)
      } else {
        setErrorMessage(data.message || "Invalid username or password. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://png.pngtree.com/background/20210715/original/pngtree-flat-business-login-box-login-page-picture-image_1319176.jpg')`,
      }}
    >
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md bg-opacity-90 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
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
              <option value="Yashua Software Limited">Yashua Software Limited</option>
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
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
          )}
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
