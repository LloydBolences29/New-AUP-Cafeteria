import { Routes, Route } from "react-router-dom";

// pages

import Home from "./pages/landing/Home";
import Landing from "./pages/landing/Landing";
import Login from "./pages/landing/Login";
import Admin from "./pages/Admin/Admin";
import Customer from "./pages/Other/Costumer";
import Menu from "./pages/landing/Menu";
import { AuthProvider } from "./util/AuthContext";
import ProtectedRoute from "./util/ProtectedRoutes";
import Settings from "./pages/Other/Settings";
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        

        {/* Admin routes */}

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        {/* Staff routes */}

        {/* Costumer routes */}
         <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
          <Route path="/customer" element={<Customer />} />
        </Route>
         <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
        
      </Routes>
    </AuthProvider>
  );
}

export default App;
