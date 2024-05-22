const Block = require('../models/blockModel');
const User = require('../models/userModel');

// Block a user
exports.blockUser = async (req, res) => {
  const { blockedUserId } = req.body;

  try {
    const existingBlock = await Block.findOne({
      userId: req.user._id,
      blockedUserId,
    });

    if (existingBlock) {
      return res.status(400).json({ message: 'User already blocked' });
    }

    const block = new Block({
      userId: req.user._id,
      blockedUserId,
    });

    await block.save();
    res.status(201).json({ message: 'User blocked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Unblock a user
exports.unblockUser = async (req, res) => {
  const { blockedUserId } = req.body;

  try {
    const block = await Block.findOneAndDelete({
      userId: req.user._id,
      blockedUserId,
    });

    if (!block) {
      return res.status(404).json({ message: 'Block not found' });
    }

    res.status(200).json({ message: 'User unblocked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get list of blocked users
exports.getBlockedUsers = async (req, res) => {
  try {
    const blocks = await Block.find({ userId: req.user._id }).populate('blockedUserId', 'username email');

    res.status(200).json(blocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
