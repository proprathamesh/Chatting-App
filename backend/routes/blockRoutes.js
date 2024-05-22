const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  blockUser,
  unblockUser,
  getBlockedUsers,
} = require('../controllers/blockController');

router.post('/block', protect, blockUser);
router.post('/unblock', protect, unblockUser);
router.get('/blocked', protect, getBlockedUsers);

module.exports = router;
