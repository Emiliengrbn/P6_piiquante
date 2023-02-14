const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const password = require("../middleware/password-validator");
const { loginRateLimiter } = require("../middleware/express-rate-limite");

router.post("/signup", password, userCtrl.signup);
router.post("/login", loginRateLimiter, userCtrl.login);

module.exports = router;
