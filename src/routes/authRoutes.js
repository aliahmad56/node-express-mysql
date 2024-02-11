// authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const verifyToken = require("../../middleware/verifyToken");

// Users Routes
router.post("/signup", authController.signup);
router.post("/auth/login", authController.login);
router.get("/profile", verifyToken, (req, res) => {
  // The user information is already decoded and attached to req.user by the middleware
  const authData = req.user;

  res.json({
    message: "Profile accessed successfully",
    authData,
  });
});

module.exports = router;
