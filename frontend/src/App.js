import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Components/Navbar';
import DepartmentList from './pages/Components/DepartmentList';
import AddDepartment from './pages/Components/AddDepartment';
import LoginPage from './pages/Components/LoginPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* {/* Default route should show the LoginPage 
        <Route path="/" element={<LoginPage />} /> {/* Main starting point is the LoginPage */}
        <Route path="/login" element={<LoginPage />} /> {/* This ensures that login page is also accessible */}
        <Route path="/" element={<DepartmentList />} /> {/* This is the DepartmentList page */}
        <Route path="/add" element={<AddDepartment />} />
      </Routes>
    </Router>
  );
};

export default App;
