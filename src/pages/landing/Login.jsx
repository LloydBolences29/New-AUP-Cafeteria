import React from "react";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import "../../styles/Login.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Lottie from "lottie-react";
import successCheck from "../../assets/Animation - 1750345867222.json";
import axios from "axios";

const Login = () => {
  const [selectedStatus, setSelectedStatus] = useState("login");
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] =
    useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalTimer, setModalTimer] = useState(3);
  const [modalMessage, setModalMessage] = useState("");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!e.target[0].value || !e.target[1].value) {
      setLoginError("Please fill in all fields.");
      setTimeout(() => setLoginError(""), 2000);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          withCredentials: true, // 🔥 THIS is the Axios version of credentials: "include"
          headers: {
            "Content-Type": "application/json", // Optional for POST, but good to be explicit
          },
        }
      );

      // Success response (you can handle it however you like)
      console.log("Login response:", response.data);
      setShowModal(true);

      // Optionally: save user data to context or redirect
      // setUser(response.data.user);
      // navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      // Check if the error is coming from the backend with a custom message
      if (error.response && error.response.data && error.response.data.error) {
        setLoginError(error.response.data.error); // e.g., "Invalid email or password"
      } else {
        setLoginError("An error occurred during login. Please try again.");
      }

      // Clear error after 5 seconds
      setTimeout(() => setLoginError(""), 5000);
    }
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setRegisterError("");
  };
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setLoginError("");
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      setRegisterError("All fields are required.");
      setTimeout(() => setRegisterError(""), 2000);
      return;
    }

    if (registerData.password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      setTimeout(() => setRegisterError(""), 2000);
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      setRegisterError("Passwords do not match.");
      setTimeout(() => setRegisterError(""), 2000);
      return;
    }
    // Proceed with registration logic
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/register",
        registerData
      );
      console.log("Registration response:", response.data);
    } catch (error) {
      console.error("Registration error:", error);
      setRegisterError(
        "An error occurred during registration. Please try again."
      );
      setTimeout(() => setRegisterError(""), 5000);
    }
  };

  //auto close the modal after 5 seconds
  useEffect(() => {
    let timer;
    if (showModal && modalTimer > 0) {
      timer = setTimeout(() => {
        setModalTimer((prev) => prev - 1);
      }, 1000);
    } else if (modalTimer === 0) {
      setShowModal(false); // hide the modal
      setModalTimer(3); // reset timer
    }
    return () => clearTimeout(timer);
  }, [showModal, modalTimer]);

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-wrapper">
          <div className="button-container">
            <Button
              variant={
                selectedStatus === "login" ? "primary" : "outline-primary"
              }
              className="button btn"
              onClick={() => handleStatusChange("login")}
            >
              Login
            </Button>
            <Button
              variant={
                selectedStatus === "register" ? "primary" : "outline-primary"
              }
              className="register-button btn"
              onClick={() => handleStatusChange("register")}
            >
              Register
            </Button>
          </div>

          {selectedStatus === "login" ? (
            <>
              <h2 className="mt-5">Login</h2>
              <Form className="mt-5" onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type={showLoginPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                    />
                    <span
                      variant="link"
                      size="sm"
                      style={{
                        position: "absolute",
                        right: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        padding: 0,
                      }}
                      onClick={() => setShowLoginPassword((prev) => !prev)}
                      tabIndex={-1}
                    >
                      {showLoginPassword ? (
                        <FaEyeSlash color="black" />
                      ) : (
                        <FaEye color="black" />
                      )}
                    </span>
                  </div>
                </Form.Group>
                {loginError && (
                  <div style={{ color: "red", marginBottom: 10 }}>
                    {loginError}
                  </div>
                )}

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </>
          ) : (
            <>
              <h2 className="mt-5">Register</h2>
              <Form className="mt-5" onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={registerData.username}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type={showRegisterPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                    />
                    <span
                      variant="link"
                      size="sm"
                      style={{
                        position: "absolute",
                        right: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        padding: 0,
                      }}
                      onClick={() => setShowRegisterPassword((prev) => !prev)}
                      tabIndex={-1}
                    >
                      {showRegisterPassword ? (
                        <FaEyeSlash color="black" />
                      ) : (
                        <FaEye color="black" />
                      )}
                    </span>
                  </div>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type={showRegisterConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                    />
                    <span
                      variant="link"
                      size="sm"
                      style={{
                        position: "absolute",
                        right: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        padding: 0,
                      }}
                      onClick={() =>
                        setShowRegisterConfirmPassword((prev) => !prev)
                      }
                      tabIndex={-1}
                    >
                      {showRegisterConfirmPassword ? (
                        <FaEyeSlash color="black" />
                      ) : (
                        <FaEye color="black" />
                      )}
                    </span>
                  </div>
                </Form.Group>
                {registerError && (
                  <div style={{ color: "red", marginBottom: 10 }}>
                    {registerError}
                  </div>
                )}
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </>
          )}
        </div>
        {showModal && (
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Body className="text-center">
              {/* <Lottie
                animationData={successCheck}
                style={{ width: 150, height: 150 }}
                loop={false}
              /> */}
              <h4 className="mt-3">Login Successful!</h4>
              <p>Closing in {modalTimer} seconds...</p>
            </Modal.Body>
          </Modal>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Login;
