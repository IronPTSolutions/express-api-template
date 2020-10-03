const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')
const upload = require('./cloudinary.config');

/* Routes here. Example:
router.get('/tweets', authMiddleware.isAuthenticated, tweetsController.index)
*/

module.exports = router;
