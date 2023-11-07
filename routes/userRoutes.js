const express = require("express");
const { createUser, getAllUsers, getSingleUsers, updateUser, deleteUser } = require("../controllers/userCtrl");
const router = express.Router();


// create user 
router.post("/create-user", createUser)

// get all user 
router.get("/get-users", getAllUsers)

// get single user 
router.get("/:id", getSingleUsers)

router.put("/update-user/:id", updateUser)

router.delete("/delete-user/:id", deleteUser)
module.exports = router;