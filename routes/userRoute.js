const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const { updateUser, deleteUser, getUser, getAllUsers, getUserStats } = require("../controllers/userController");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const router = express.Router();


router.post("/register", registerUser);

router.post("/login", loginUser);

router.put("/:id", verifyTokenAndAuthorization, updateUser);

router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

router.get("/find/:id", verifyTokenAndAdmin, getUser);

router.get("/", verifyTokenAndAdmin, getAllUsers);

router.get("/stats", verifyTokenAndAdmin, getUserStats);






module.exports = router;