import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css"

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://tradetrack-zbfc.onrender.com/allOrders") // Replace with your backend URL
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  const submitOrder = async () => {
    try {
      const response = await axios.post("https://tradetrack-zbfc.onrender.com/newOrder", {
        name: "AAPL",
        qty: 5,
        price: 200,
        mode: "Buy"
      });
      console.log("✅ Order submitted:", response.data);
    } catch (err) {
      console.error("❌ Error submitting order:", err);
    }
  };
  
return (
  <div className="orders">
    <button className="submit-btn" onClick={submitOrder}>Submit Test Order</button> {/* 🔥 Add this */}

    {orders.length === 0 ? (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <a href="/" className="btn">Get started</a>
      </div>
    ) : (
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
};

export default Orders;