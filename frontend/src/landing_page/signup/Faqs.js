import React, { useState } from "react";

const faqData = [
  {
    question: "What is a Zerodha account?",
    answer: "A Zerodha account allows you to invest and trade in equities, mutual funds, F&O, and more through India's largest brokerage platform.",
  },
  {
    question: "What documents are required to open a demat account?",
    answer: "PAN card, Aadhaar card, a canceled cheque, and a signature on white paper are typically required.",
  },
  {
    question: "Is Zerodha account opening free?",
    answer: "Opening a Zerodha account may have nominal charges. The equity account has a one-time fee, but there are no hidden charges.",
  },
  {
    question: "Are there any maintenance charges for a demat account?",
    answer: "Yes, a small annual maintenance charge (AMC) is applicable for maintaining your demat account.",
  },
  {
    question: "Can I open a demat account without a bank account?",
    answer: "No, a valid bank account is required to link with your Zerodha demat account for transactions.",
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container py-5 mt-5">
      <h2 className="mb-4 ">FAQs</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="border-bottom py-3">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleAccordion(index)}
            >
              <h5 className="mb-0">{item.question}</h5>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 ps-2 border-start border-primary border-4">
                <p className="text-muted">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;