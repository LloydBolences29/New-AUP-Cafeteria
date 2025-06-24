import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../util/AuthContext";

const Header = () => {
  const { auth } = useAuth();
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
                <Nav.Link href="/menu">Menu</Nav.Link>
                {auth.isAuthenticated ? (
                  <>
                    
                    {auth.user === "admin" ? (
                      <Nav.Link href="/admin">Admin Profile</Nav.Link>
                    ) : auth.user === "customer" ? (
                      <Nav.Link href="/customer">My Profile</Nav.Link>
                    ) : null}
                  </>
                ) : (
                  <>
                    {" "}
                    <Nav.Link href="/login">Register/Login</Nav.Link>
                  </>
                )}
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
