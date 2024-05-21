
const express = require("express");
const router = express.Router();
const Message = require("../models/messageModel");

// Send message route
router.post("/send", async (req, res) => {
  try {
    const { sender, receiver, content } = req.body;
    const message = new Message({ sender, receiver, content });
    await message.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get messages route
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const messages = await Message.find({ receiver: userId }).populate(
      "sender",
      "username"
    );
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
