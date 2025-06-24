import React from "react";
import BottomNav from "../../components/BottomNav";
import "../../styles/Customer.css"; // Assuming you have a CSS file for styles
import { BsSliders } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";


const Costumer = () => {
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
              <a clashref="">
                <BsSliders color="white" size={18}/>
              </a>
              <a href="">
                <BsArrowBarRight color="white" size={18}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />{" "}
    </div>
  );
};

export default Costumer;
