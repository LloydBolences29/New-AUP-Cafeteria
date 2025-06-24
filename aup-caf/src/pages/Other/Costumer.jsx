import React from "react";
import BottomNav from "../../components/BottomNav";
import "../../styles/Customer.css"; // Assuming you have a CSS file for styles
import { BsSliders } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Costumer = () => {
  const navigate = useNavigate();
const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/logout/logout", {
        method: "POST",
        credentials: "include", // Required to include cookies in the request
      });

      if (response.ok) {
        console.log("Logout successful");
        navigate("/login"); // Redirect to login page
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
}

  return (
    <div>
      <div className="profileContainer">
        <div className="profileWrapper">
          <div className="profile">
            <div className="profile-picture">
              <img src="./profile.jpg" id="profile-picture" alt="Profile" />
            </div>

            <div className="additional-profile">
              <div className="user-name">
                <h1>Lloyd Matthew Bolences</h1>
              </div>
              <div className="info">
                <p>Student ID: 123456789</p>
              </div>
            </div>

            <div className="settings">
              <a href="/">
                <BsSliders color="white" size={18}/>
              </a>
              
                <BsArrowBarRight onClick={handleLogout} color="white" size={18}/>
              
            </div>
          </div>
        </div>
      </div>
      <BottomNav />{" "}
    </div>
  );
};

export default Costumer;
