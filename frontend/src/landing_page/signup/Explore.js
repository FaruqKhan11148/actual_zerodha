import React from "react";
import { FaUser, FaUsers, FaGlobeAsia, FaChild, FaBuilding } from "react-icons/fa";

function Explore() {
  const accountTypes = [
    {
      title: "Individual Account",
      desc: "Invest in equity, mutual funds and derivatives",
      icon: <FaUser className="text-primary fs-4" />,
      isActive: true,
    },
    {
      title: "HUF Account",
      desc: "Make tax-efficient investments for your family",
      icon: <FaUsers className="text-primary fs-4" />,
    },
    {
      title: "NRI Account",
      desc: "Invest in equity, mutual funds, debentures, and more",
      icon: <FaGlobeAsia className="text-primary fs-4" />,
    },
    {
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future with them",
      icon: <FaChild className="text-primary fs-4" />,
    },
    {
      title: "Corporate / LLP/ Partnership",
      desc: "Manage your business surplus and investments easily",
      icon: <FaBuilding className="text-primary fs-4" />,
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Explore different account types</h2>
      <div className="row g-4 justify-content-center">
        {accountTypes.map((acc, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <div
              className="border border-secondary rounded p-4 h-100 shadow-sm"
              style={{ transition: "all 0.3s ease" }}
            >
              <div className="d-flex align-items-start gap-3">
                <div className="bg-light p-2 rounded-circle">{acc.icon}</div>
                <div>
                  <h5>{acc.title}</h5>
                  <p className="text-muted mb-0">{acc.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;