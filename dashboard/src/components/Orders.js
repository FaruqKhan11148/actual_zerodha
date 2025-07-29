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

  
return (
  <div className="orders">
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