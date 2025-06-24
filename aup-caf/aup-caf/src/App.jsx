import { Routes, Route } from "react-router-dom";

// pages

import Home from "./pages/landing/Home";
import Landing from "./pages/landing/Landing";
import Login from "./pages/landing/Login";
import Admin from "./pages/Admin/Admin";
import Customer from "./pages/Other/Costumer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Customer />} />

        {/* Admin page */}
        <Route path="/admin" element={<Admin />} />
        
        {/* Add more routes as needed */}
      </Routes>
      
      
    </>
  );
}

export default App;
