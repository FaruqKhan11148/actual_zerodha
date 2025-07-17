import React from "react";

function Steps() {
  const steps = [
    "Enter the requested details",
    "Complete e-sign & verification",
    "Start investing!",
  ];

  return (
    <div className="container py-5" style={{marginTop:"90px"}}>
        <h2 style={{textAlign:"center"}}>Steps to open a demat account with Zerodha</h2>
      <div className="row align-items-center" style={{marginTop:"70px"}}>
        {/* Left Column (Image placeholder) */}
        <div className="col-md-6 text-center mb-4 mb-md-0" >
          <img
            src="media/images/steps-acop_xyz6_signup.svg"
            alt="Steps illustration"
            className="img-fluid"
          />
        </div>

        {/* Right Column (Steps) */}
        <div className="col-md-6">
          {steps.map((text, index) => (
            <div key={index} className="d-flex align-items-start mb-3">
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#0d6efd",
                  minWidth: "40px",
                }}
              >
                0{index + 1}
              </span>
              <p className="mb-0 ms-3" style={{ fontSize: "1.3rem", fontWeight:"500" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Steps;