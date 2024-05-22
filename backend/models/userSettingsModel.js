const mongoose = require('mongoose');

const userSettingsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    notifications: {
        type: Boolean,
        default: true,
    },
    privacy: {
        type: String,
        enum: ['public', 'private', 'friends-only'],
        default: 'public',
    },
    theme: {
        type: String,
        default: 'light',
    },
});

module.exports = mongoose.model('UserSettings', userSettingsSchema);
