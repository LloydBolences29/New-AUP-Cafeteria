import { Routes, Route } from "react-router-dom";

// pages

import Home from "./pages/landing/Home";
import Landing from "./pages/landing/Landing";
import Login from "./pages/landing/Login";
import Admin from "./pages/Admin/Admin";
import Customer from "./pages/Other/Costumer";
import Menu from "./pages/landing/Menu";
function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        

        {/* Admin routes */}
        <Route path="/admin" element={<Admin />} />
        {/* Staff routes */}

        {/* Costumer routes */}
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
