// server.js

const express = require('express');
const mongoose = require('./db'); // Ensure you have the correct path to db.js

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const protectedRoutes = require("./routes/protectedRoute");
const blockRoutes = require('./routes/blockRoutes');
const userSettingsRoutes = require('./routes/userSettingsRoutes'); 

// Your middleware and routes setup

app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes);
app.use("/api", protectedRoutes);
app.use('/api/block', blockRoutes);
app.use('/api/user-settings', userSettingsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
