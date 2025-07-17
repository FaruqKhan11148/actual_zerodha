import React from "react";

function UnbeatenPricing() {
  const benefits = [
    {
      title: "Unbeatable pricing",
      desc: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
    },
    {
      title: "Best investing experience",
      desc: "Simple and intuitive trading platform with an easy-to-understand user interface.",
    },
    {
      title: "No spam or gimmicks",
      desc: `Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.`,
    },
    {
      title: "The Zerodha universe",
      desc: `More than just an app — gain free access to the entire ecosystem of our partner products.`,
    },
  ];

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left side image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/acop-benefits_xyz_signup.svg"
            alt="Zerodha Benefits Illustration"
            className="img-fluid"
            style={{ height: "200px" }}
          />
          <h2 className="mb-4" style={{marginTop:"50px", justifyContent:"justify"}}>Benefits of opening a Zerodha demat account</h2>
        </div>

        {/* Right side content */}
        <div className="col-md-6">
          
          {benefits.map((item, index) => (
            <div key={index} className="mb-4">
              <h5 className="fw-semibold mb-4">{item.title}</h5>
              <p className="text-muted mb-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UnbeatenPricing;