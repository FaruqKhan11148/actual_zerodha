import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, onOrderPlaced }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState();

  const handleBuyClick = async () => {
    try {
      await axios.post("https://tradetrack-zbfc.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      alert("✅ Order submitted successfully!");
      if (onOrderPlaced) onOrderPlaced();
      closeBuyWindow();
    } catch (err) {
      console.error("❌ Error submitting order:", err);
      alert("❌ Failed to submit order.");
    }
  };

  return (
    <div className="buy-window-wrapper">
      <div className="buy-window" draggable="true">
        <h2 className="title">Buy Stock</h2>
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
          <span className="margin">Margin required ₹140.65</span>
          <div>
            <button className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </button>
            <button className="btn btn-grey" onClick={closeBuyWindow}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
