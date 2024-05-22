const Message = require('../models/messageModel');

// Send Message
exports.sendMessage = async (req, res) => {
  const { receiver, text, attachments } = req.body;

  try {
    const message = await Message.create({
      sender: req.user._id,
      receiver,
      text,
      attachments,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Messages
exports.getMessages = async (req, res) => {
  const { userId } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: userId },
        { sender: userId, receiver: req.user._id },
      ],
    }).sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
