import { Routes, Route } from "react-router-dom";

// pages

import Home from "./pages/landing/Home";
import Landing from "./pages/landing/Landing";
import Login from "./pages/landing/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      
    </>
  );
}

export default App;
