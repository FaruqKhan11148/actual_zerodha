import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

 const handleBuyClick = async () => {
  console.log("🟢 Buy button clicked");
  try {
    const response = await axios.post("https://tradetrack-zbfc.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "Buy",
    });

    console.log("✅ Order submitted:", response.data);

    closeBuyWindow();
    console.log("🚪 Called closeBuyWindow()");
  } catch (err) {
    console.error("❌ Error submitting order:", err);
  }
};


  const handleCancelClick = () => {
    console.log("🚪 Called closeBuyWindow()");
    closeBuyWindow(); // Close window on cancel
  };


  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">  
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice || ""}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
