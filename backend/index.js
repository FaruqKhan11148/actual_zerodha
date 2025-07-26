require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3004;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(cors({
  origin: "*", // or your frontend domain
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,  
//     mode: req.body.mode,
//   });

//   await newOrder.save();
//   console.log("Order saved!");
// });

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    console.log("✅ Order saved:", newOrder);
    // ‼️  Always close the request with a response:
    res.status(201).json({ message: "Order saved", order: newOrder });
  } catch (err) {
    console.error("❌ Error saving order:", err);
    res.status(500).json({  error: "Failed to save order" });
  }
});

app.get('/allOrders', async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err);
  });

