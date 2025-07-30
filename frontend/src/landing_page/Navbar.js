import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: '#ffffff' , height:"70px"}}
      >
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img src="media/images/logo.svg" style={{ width: '22%' }} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <a
                    href="https://tracktrade-lovat.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      background: 'linear-gradient(135deg, #4CAF50, #2E8B57)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.3s ease-in-out'
                    }}
                    onMouseOver={e => {
                      e.target.style.background = 'linear-gradient(135deg, #43A047, #1B5E20)';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.25)';
                    }}
                    onMouseOut={e => {
                      e.target.style.background = 'linear-gradient(135deg, #4CAF50, #2E8B57)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    Go to Dashboard
                  </a>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active text-muted" aria-current="page" to={"/signup"}>
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={"/about"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" aria-current="page" to={"/products"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" aria-current="page" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" aria-current="page" to={"/support"}>
                    Support
                  </Link>
                </li>
                
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;