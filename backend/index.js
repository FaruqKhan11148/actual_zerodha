require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");

const User = require('./model/user');
const userRouter = require('./routes/user');
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3004;
const uri = process.env.MONGO_URL;

const app = express();

// ---------- CORS (MUST COME BEFORE sessions) ----------
app.use(cors({
  origin: "https://actual-zerodha.vercel.app", // frontend domain
  credentials: true
}));

// ---------- Body Parsing ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------- Session Middleware ----------
app.use(session({
  secret: 'yourSecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,         // True for HTTPS only
    sameSite: 'none'      // Required for cross-site cookies
  }
}));

// ---------- Passport Setup ----------
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ---------- Test Route ----------
app.get("/hh", (req, res) => {
  res.send("Backend is up and running!");
});

// ---------- Auth Routes ----------
app.use("/", userRouter);

// ---------- Dummy Data Routes ----------
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).json({ message: "Order saved", order: newOrder });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});

// ---------- MongoDB + Start Server ----------
mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
  });
