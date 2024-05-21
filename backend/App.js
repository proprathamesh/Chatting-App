// server.js

const express = require('express');
const mongoose = require('./db'); // Ensure you have the correct path to db.js

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const protectedRoutes = require("./routes/protectedRoute");

// Your middleware and routes setup

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use("/api", protectedRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
