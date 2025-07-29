import React from "react";

function OpenAcc() {
  return (
    <div className="text-center py-5">
      <h2 className="fw-semibold mb-3">Open a Zerodha account</h2>
      <p className="text-muted mb-4">
        Simple and intuitive apps &middot; ₹0 for investments &middot; ₹20 for intraday and F&amp;O trades.
      </p>
      <button onClick={() => window.location.href = 'https://actual-zerodha.vercel.app/signup'} className="btn btn-primary px-4 py-2 fw-medium">
        Login
      </button>
      <p>Click for Login</p>
    </div>  
  );
}

export default OpenAcc;