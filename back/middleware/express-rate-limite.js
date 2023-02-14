const rateLimit = require("express-rate-limit");

const loginRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 min in milliseconds
  max: 5,
  statusCode: 429,
  headers: true,
});
module.exports = { loginRateLimiter };
