import React, { useContext, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const submitOrder = async () => {
    try {
      await axios.post("https://tradetrack-zbfc.onrender.com/newOrder", {
        name: uid, // Assuming uid is stock name
        qty: Number(qty),
        price: Number(price),
        mode: "Buy",
      });

      console.log("✅ Order submitted!");
      closeBuyWindow(); // <-- Close the window after successful order
    } catch (err) {
      console.error("❌ Error submitting order:", err);
    }
  };

  return (
    <div className="buy-window">
      <h3>Buy {uid}</h3>
      <input
        type="number"
        placeholder="Quantity"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={submitOrder}>Confirm Buy</button>
      <button onClick={closeBuyWindow}>Cancel</button>
    </div>
  );
};

export default BuyActionWindow;
