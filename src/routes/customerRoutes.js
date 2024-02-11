// customerRoutes.js
const express = require("express");
const router = express.Router();
const CustomerController = require("../../controllers/CustomerController");

// Below are the CRUD Apis
router.post("/customers", CustomerController.createUser);
router.get("/customers", CustomerController.getAllUsers);
router.get("/customers/:id", CustomerController.getUserById);
router.put("/customers/:id", CustomerController.updateUser);
router.delete("customers/:id", CustomerController.deleteUser);

module.exports = router;
