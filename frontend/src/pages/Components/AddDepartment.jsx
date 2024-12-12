import React, { useState } from 'react';

const AddDepartment = ({ addDepartment }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const newDepartment = { name };

    try {
      const response = await fetch('http://localhost:5000/api/department/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDepartment),
      });

      if (!response.ok) {
        throw new Error('Failed to add department');
      }

      const data = await response.json();
      addDepartment(data); // Assuming the response contains the new department data
      setMessage(`Department "${name}" added successfully!`);
      setName('');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Department</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="departmentName">
            Department Name
          </label>
          <input
            id="departmentName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-2 px-4 py-3 text-gray-800 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter department name"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          {isLoading ? 'Adding...' : 'Add Department'}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>
      )}
      {error && (
        <p className="mt-4 text-center text-red-600 font-semibold">{error}</p>
      )}
    </div>
  );
};

export default AddDepartment;
