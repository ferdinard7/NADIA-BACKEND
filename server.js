const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;


connectDb();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("welcome to NADIA BAKERY BACKEND")
})
app.use("/api/auth", require("./routes/userRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/products", require("./routes/productRoute"));
app.use("/api/carts", require("./routes/cartRoute"));
app.use("/api/orders", require("./routes/orderRoute"));
app.use("/api/checkout", require("./routes/paystackRoute"));


app.listen(port, () => {
    console.log(`server is up and port on port ${port}`);
})