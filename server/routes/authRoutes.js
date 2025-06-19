const express = require("express");
const bcrypt = require("bcrypt"); // Make sure this is installed: npm install bcrypt
const router = express.Router();
const { connectToDatabase } = require("../lib/db"); // Adjust the path if needed
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
  const { username, email, password, role_id } = req.body;
  console.log("Registering user:", username, email);

  try {
    const db = await connectToDatabase();

    // 1. Check if user already exists
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      console.log("User already exists:", email);
      return res.status(400).json({ error: "User already exists" });
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Insert user into database
    await db.query(
      "INSERT INTO users (username, email, password, role_id) VALUES (?, ?, ?,?)",
      [
        username,
        email,
        hashedPassword,
        1, // Default role if not provided
      ]
    );

    // 4. Respond success
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Database connection error:", error);
    console.log("Connecting with user:", process.env.DB_USER);
    return res.status(500).json({ error: "Database connection failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    //check if the user is already existing
    const existingUser = await connectToDatabase().then((db) =>
      db.query("SELECT users.*, roles.role_name FROM users JOIN roles ON users.role_id = roles.id WHERE email = ?", [email])
    );
    if (existingUser[0].length === 0) {
      return res
        .status(401)
        .json({ error: `Email doesn't exist in our records!!` });
    }

    //check if the password is correct
    const user = existingUser[0][0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(401).json({ error: "Invalid password!!" });
    }

    //generate the JWT token
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        role_id: user.role_id,
        role: user.role_name // Include role_id in the token
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // Token expiration time
      }
    );

    //Set the cookiee
    res.cookie("cookie", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: true,
      sameSite: "None", // Helps prevent CSRF attacks
    });

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: user.role_name
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/auth", async (req, res) => {
  try {

    console.log("Checking authentication...", req.cookies)
    const token = req.cookies.token; // Assuming the JWT is stored in a cookie named 'token'
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    //decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);
    res.json({
      message: "User authenticated",
      user: {
        id: decoded.id,
        username: decoded.username,
        email: decoded.email,
        role_id: decoded.role_id,
        role: decoded.role // Include role in the response 
      },
    });
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
