require('dotenv').config();


const express = require('express');
const cookieParser = require("cookie-parser");

const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const utilityRoutes = require('./routes/utilityRoutes');

const app = express();
app.use(cookieParser()); 

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());


//routes
app.use('/auth', authRoutes);
app.use('/logout', utilityRoutes);


app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});