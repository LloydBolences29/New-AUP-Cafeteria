import React from "react";
import "../styles/Header.css";


const Header = () => {
  return (
    <div className="body">
      <nav className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 nav-container">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-800 nav-wrapper">
                <h1 ><a className="header-title" href="/">AUP CAFETERIA</a></h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
