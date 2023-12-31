const express = require("express");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const { postProduct, updateProduct, deleteProduct, getProduct, getAllProduct } = require("../controllers/productController");
const router = express.Router();


router.post("/", verifyTokenAndAdmin, postProduct);

router.put("/:id", verifyTokenAndAdmin, updateProduct);

router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

router.get("/find/:id", getProduct);

router.get("/", getAllProduct);





module.exports = router;