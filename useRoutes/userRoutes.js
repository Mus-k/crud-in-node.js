const express = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
  editUser,
} = require("../userControllers/userControllers.js");
const router = express.Router();

router.post("/createuser", createUser);
router.get("/", getUsers);
router.delete("/deleteuser/:id", deleteUser);
router.put("/edituser/:id", editUser);

module.exports = router;
