import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import DepartmentManagement from "./pages/DepartmentManagement";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBasedRoutes from "./utils/RoleBasedRoutes";

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element ={<DepartmentManagement/>}></Route>
    </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBasedRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBasedRoutes>
            </PrivateRoutes>
          }
        />
        <Route
          path="/employee-dashboard"
          element={
            <PrivateRoutes>
              <EmployeeDashboard />
            </PrivateRoutes>
          }
        />
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;