const UserSettings = require('../models/userSettingsModel');

// Get user settings
exports.getUserSettings = async (req, res) => {
    try {
        const settings = await UserSettings.findOne({ userId: req.user._id });

        if (settings) {
            res.status(200).json(settings);
        } else {
            res.status(404).json({ message: 'Settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user settings
exports.updateUserSettings = async (req, res) => {
    const { notifications, privacy, theme } = req.body;

    try {
        const settings = await UserSettings.findOne({ userId: req.user._id });

        if (settings) {
            settings.notifications = notifications !== undefined ? notifications : settings.notifications;
            settings.privacy = privacy || settings.privacy;
            settings.theme = theme || settings.theme;

            const updatedSettings = await settings.save();
            res.status(200).json(updatedSettings);
        } else {
            res.status(404).json({ message: 'Settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
