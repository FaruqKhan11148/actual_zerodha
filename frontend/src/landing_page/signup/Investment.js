import React from "react";

function Investment() {
  const options = [
    {
      img: "media/images/stocks-acop_xyz2_signup.svg",
      alt: "Stocks icon",
      title: "Stocks",
      subtitle: "Invest in all exchange-listed securities"
    },
    {
      img: "media/images/mf-acop__xyz3_signup.svg",
      alt: "Mutual Funds icon",
      title: "Mutual funds",
      subtitle: "Invest in commission-free direct mutual funds"
    },
    {
      img: "media/images/ipo-acop__xyz4_signup.svg",
      alt: "IPO icon",
      title: "IPO",
      subtitle: "Apply to the latest IPOs instantly via UPI"
    },
    {
      img: "media/images/fo-acop__xyz5_signup.svg",
      alt: "F&O icon",
      title: "Futures & options",
      subtitle: "Hedge and mitigate market risk through simplified F&O trading"
    }
  ];

  return (
    <>
    <div className="container py-5" style={{marginTop:"80px"}}>
      <h2 className="text-center mb-5">Investment options with Zerodha demat account</h2>
      <div className="row g-4" style={{marginTop:"70px"}}>
        {options.map((item, idx) => (
          <div className="col-md-6" key={idx}>
            <div className="d-flex align-items-start gap-3 p-3  h-100">
              <img
                src={item.img}
                alt={item.alt}
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "contain"
                }}
              />
              <div>
                <h5 className="mb-1" style={{fontSize:"30px"}}>{item.title}</h5>
                <p className="text-muted mb-0">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <button className="btn btn-primary mb-3 " style={{width:"230px", fontSize:"20px", textAlign:"center", marginLeft:"660px", marginTop:"20px"}}>Explore Investments</button>
    </>
  );
}

export default Investment;