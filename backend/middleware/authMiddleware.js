// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;

  if (
    req.cookies.token
  ) {
    try {
      token = req.cookies.token;
      const decoded = jwt.verify(token, "your_jwt_secret");

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
