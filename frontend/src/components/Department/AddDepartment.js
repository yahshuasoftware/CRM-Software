import React from "react";

const AddDepartment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
          Add Department
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="departmentName"
              className="block text-black-600 font-semibold mb-2"
            >
              Department Name
            </label>
            <input
              type="text"
              id="departmentName"
              placeholder="Enter department name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-black font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition duration-300 border border-black"
          >
            Add Department
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
