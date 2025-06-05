import React from "react";
import BottomNav from "../../components/BottomNav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import "../../styles/landing.css";

const Landing = () => {
  return (
    <div>
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
                <Nav.Link href="/login">Register/Login</Nav.Link>
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
            <div className="staff-header">
              <h2 className="meet-header">Meet Our Staff</h2>
              <p className="p-staff">
                Dedicated professionals ready to serve you.
              </p>
            </div>

            <div className="staff-cards">
            
                <div className="staff-card" id="staff-card-1">
                  <div className="staff-info">
                    <h3>John Doe</h3>
                    <p>Manager</p>
                  </div>
                </div>
                <div className="staff-card" id="staff-card-2">
                  <div className="staff-info">
                    <h3>Jane Smith</h3>
                    <p>Chef</p>
                  </div>
                </div>
                <div className="staff-card" id="staff-card-3">
                  <div className="staff-info">
                    <h3>Emily Johnson</h3>
                    <p>Cashier</p>
                  </div>
                </div>
                <div className="staff-card" id="staff-card-4">
                  <div className="staff-info">
                    <h3>Taha Davila</h3>
                    <p>Server</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <p>&copy; 2025 AUP Cafeteria. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
};

export default Landing;
