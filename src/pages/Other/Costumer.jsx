import React from "react";
import BottomNav from "../../components/BottomNav";
import "../../styles/Customer.css"; // Assuming you have a CSS file for styles

const Costumer = () => {
  return (
    <div>
      <div className="profileContainer">
        <div className="profileWrapper">
          <div className="profile">
            <div className="profile-picture">
              <img src="./profile.jpg" id="profile-picture" alt="Profile" />
            </div>

            <div className="profile">
              <div className="user-name">
                <h1>Lloyd Matthew Bolences</h1>
              </div>
              <div className="additional-info">
                <p>Student ID: 123456789</p>
                <p>Course: Bachelor of Science in Computer Science</p>
                <p>Year Level: 3rd Year</p>
              </div>
            </div>

            <div className="settings">
              <button className="settings-button">Settings</button>
              <button className="logout-button">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />{" "}
    </div>
  );
};

export default Costumer;
