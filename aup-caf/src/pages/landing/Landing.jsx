import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "../../styles/landing.css";

const Landing = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="body">
      <div className="navbar-lg-screen">
        <Navbar expand="lg" className="bg-white">
          <Container fluid>
            <Navbar.Brand href="#">AUP Cafeteria</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Register</Nav.Link>
                <Nav.Link href="#action2">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Welcome to AUP Cafeteria</h1>
            <p>Your one-stop solution for managing cafeteria services.</p>
            <Button variant="primary" size="lg" href="#register">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="staff-section">
        <div className="staff-container">
          <div className="staff-content">
            <h2>Meet Our Staff</h2>
            <p>Dedicated professionals ready to serve you.</p>
            <div className="staff-cards">
              <div className="staff-card">
                <h3>John Doe</h3>
                <p>Manager</p>
              </div>
              <div className="staff-card">
                <h3>Jane Smith</h3>
                <p>Chef</p>
              </div>
              <div className="staff-card">
                <h3>Emily Johnson</h3>
                <p>Cashier</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <footer>
        <div className="footer-container">
          <p>&copy; 2023 AUP Cafeteria. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>




      <div className="navbar-mobile-screen">
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Register" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Login" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
};

export default Landing;
