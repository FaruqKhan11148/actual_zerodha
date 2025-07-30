require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require('./model/user');
const userRouter = require('./routes/user');
const session = require("express-session");
const passport = require("passport");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3004;
const uri = process.env.MONGO_URL;

const app = express();

app.use(passport.initialize());
app.use(passport.session());

// Passport config
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://actual-zerodha.vercel.app",
      "https://tracktrade-lovat.vercel.app"
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS error: " + origin));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.use(session({
  secret: 'tracktradingSecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "none",
    secure: true
  }
}));

app.options('*', cors()); // handle preflight globally


// Also make sure to use these before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/hh", (req, res) => {
  res.send("Backend is up and running!");
});

app.use("/", userRouter); 

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    console.log("Order saved:", newOrder);
    // Always close the request with a response:
    res.status(201).json({ message: "Order saved", order: newOrder });
  } catch (err) {
    console.error("Error saving order:", err);
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

