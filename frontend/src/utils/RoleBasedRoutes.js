import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContex";

const RoleBasedRoutes = ({ children, requiredRole }) => {
    const { user, loading } = useAuth();
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user || !requiredRole.includes(user.role)) {
      return <Navigate to="/unauthorized" />;
    }
  
    return children;
  };
  
  export default RoleBasedRoutes;