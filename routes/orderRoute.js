const express = require("express");
const { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrder, getIncome } = require("../controllers/orderController");
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/", verifyToken, createOrder)

router.put("/:id", verifyTokenAndAdmin, updateOrder);

router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);

router.get("/", verifyTokenAndAdmin, getAllOrder);

router.get("/income", verifyTokenAndAdmin, getIncome);



module.exports = router;