import { Routes, Route } from "react-router-dom";

// pages

import Home from "./pages/landing/Home";
import Landing from "./pages/landing/Landing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      
      
    </>
  );
}

export default App;
