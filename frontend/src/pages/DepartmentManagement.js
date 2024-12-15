import React, { useState } from "react";
import DepartmentList from "../components/Department/DepartmentList";
import AddDepartment from "../components/Department/AddDepartment";

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([]);

  const handleAddDepartment = (newDepartment) => {
    setDepartments((prevDepartments) => [...prevDepartments, newDepartment]);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col items-center py-8 relative overflow-hidden">
  

      {/* Main Content */}
      <div className="relative bg-white bg-opacity-95 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <AddDepartment onAdd={handleAddDepartment} />
      </div>
    </div>
  );
};

export default DepartmentManagement;
