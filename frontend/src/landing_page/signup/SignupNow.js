import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("https://tradetrack-zbfc.onrender.com/register", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(form),
        });

        if (res.ok) {
          window.location.href = 'https://tracktrade-lovat.vercel.app';
        } else {
          const error = await res.json();
          alert(error.message || 'Signup failed');
        }
      } catch (err) {
        console.error(err);
        alert('Something went wrong');
      }
    };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: "100px" }}>
      <div className="row w-100" style={{ maxWidth: "900px" }}>
        {/* Left Side – Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="/media/images/account_open_xyz1_signup.svg"
            alt="Signup Illustration"
            style={{ height: "auto", width: "600px" }}
          />
        </div>

        {/* Right Side – Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mb-2">Sign</h2>
          <p className="text-muted mb-4">Or track your existing application</p>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control mb-2"
              onChange={handleChange}
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-2"
              onChange={handleChange}
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control mb-2"
              onChange={handleChange}
              required
            />

            {/* Phone (with +91 prefix shown but fixed) */}
            <div className="d-flex mb-2">
              <span className="input-group-text bg-light border rounded-start">+91</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="form-control rounded-end"
                maxLength={10}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Gender */}
            <select
              name="gender"
              className="form-select mb-3"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            {/* Submit */}
            <button type="submit" className="btn btn-primary mb-3" style={{ width: "250px" }}>
              Register
            </button>
          </form>

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

export default Signup;
