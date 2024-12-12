import React, { useState, useEffect } from 'react';
import AddDepartment from './AddDepartment'; // Adjust the import path

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch departments from the API
  const fetchDepartments = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/department');
      if (!response.ok) {
        throw new Error('Failed to fetch departments');
      }
      const data = await response.json();
      setDepartments(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // UseEffect to fetch departments on component mount
  useEffect(() => {
    fetchDepartments();
  }, []);

  // Add department to the list
  const addDepartment = (newDepartment) => {
    setDepartments((prevDepartments) => [...prevDepartments, newDepartment]);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <AddDepartment addDepartment={addDepartment} />
      <h2 className="text-3xl font-semibold text-center text-gray-800 my-8">Departments</h2>
      {isLoading && (
        <p className="text-center text-gray-500">Loading departments...</p>
      )}
      {error && (
        <p className="text-center text-red-600 font-semibold">{error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.length > 0 ? (
          departments.map((dept, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-700">{dept.name}</h3>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No departments available.</p>
        )}
      </div>
    </div>
  );
};

export default DepartmentList;
