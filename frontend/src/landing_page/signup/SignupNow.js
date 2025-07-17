import React from "react";

function SignupNow() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{marginTop:"100px"}} >
      <div className="row w-100" style={{ maxWidth: "900px" }}>
        {/* Left Side – Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="media/images/account_open_xyz1_signup.svg"
            alt="Signup Illustration"
            style={{ height:"auto", width:"600px"}}
          />
        </div>

        {/* Right Side – Content */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mb-2">Signup now</h2>
          <p className="text-muted mb-4">Or track your existing application</p>

          {/* Mobile Input */}
          <div className="d-flex mb-3">
            <span className="input-group-text bg-light border rounded-start">+91</span>
            <input
              type="tel"
              className="form-control rounded-end"
              placeholder="Enter your mobile number"
              maxLength={10}
            />
          </div>

          <button className="btn btn-primary mb-3" style={{width:"250px"}}>Get OTP</button>

          {/* Terms */}
          <p className="text-muted small">
            By proceeding, you agree to the Zerodha{" "}
            <a href="https://zerodha.com/terms/" target="_blank" rel="noreferrer">
              terms
            </a>{" "}
            &{" "}
            <a href="https://zerodha.com/privacy/" target="_blank" rel="noreferrer">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupNow;