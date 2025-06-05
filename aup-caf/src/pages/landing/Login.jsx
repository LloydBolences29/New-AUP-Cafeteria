import React from "react";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import "../../styles/Login.css"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [selectedStatus, setSelectedStatus] = useState("login");
  const [registerData, setRegisterData] = useState({ email: '', password: '', confirmPassword: '' });
  const [registerError, setRegisterError] = useState('');
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  }

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setRegisterError('');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password.length < 6) {
      setRegisterError('Password must be at least 6 characters long.');
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      setRegisterError('Passwords do not match.');
      return;
    }
    // Proceed with registration logic
  };

  return (
    <div>
      <Header />

      <div className="login-container">
        <div className="login-wrapper">
          <div className="button-container">
            <Button
              variant={selectedStatus === "login" ? "primary" : "outline-primary"}
              className="button btn"
              onClick={() => handleStatusChange("login")}
            >
              Login
            </Button>
            <Button
              variant={selectedStatus === "register" ? "primary" : "outline-primary"}
              className="register-button btn"
              onClick={() => handleStatusChange("register")}
            >
              Register
            </Button>
          </div>

          {
            selectedStatus === "login" ? (
              <>
              <h2 className="mt-5">Login</h2>
              <Form className="mt-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control type="number" placeholder="Enter ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div style={{ position: 'relative' }}>
            <Form.Control
              type={showLoginPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              variant="link"
              size="sm"
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', padding: 0 }}
              onClick={() => setShowLoginPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showLoginPassword ? <FaEyeSlash color="black"/> : <FaEye color="black" />}
            </span>
          </div>
            </Form.Group>

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
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={registerData.email} onChange={handleRegisterChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div style={{ position: 'relative' }}>
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
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', padding: 0 }}
              onClick={() => setShowRegisterPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showRegisterPassword ? <FaEyeSlash color="black" /> : <FaEye color="black" />}
            </span>
          </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <div style={{ position: 'relative' }}>
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
              style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', padding: 0 }}
              onClick={() => setShowRegisterConfirmPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showRegisterConfirmPassword ? <FaEyeSlash color="black" /> : <FaEye color="black" />}
            </span>
          </div>
            </Form.Group>
            {registerError && <div style={{ color: 'red', marginBottom: 10 }}>{registerError}</div>}
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          </>
            )
          }

          
        </div>
      </div>




      <BottomNav />
    </div>
  );
};

export default Login;
