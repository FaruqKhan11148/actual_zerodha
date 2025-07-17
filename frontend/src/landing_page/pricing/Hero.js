import React from 'react'

function Hero() {
    return ( 
        <>
            <div className="container">
                <div className="row text-center">
                    <h1 style={{marginTop:"100px"}}>Charges</h1>
                    <h5 className='text-muted mb-5'>List of all charges and taxes</h5>
                    
                    <div className="col-4" style={{marginTop:"100px"}}>
                        <img style={{width:"250px"}} src="media/images/pricing-eq.svg" alt="" />
                        <h2>Free equity delivery</h2>
                        <h6 className='m-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h6>

                    </div>
                    <div className="col-4" style={{marginTop:"100px"}}>
                        <img style={{width:"250px"}} src="media/images/other-trades.svg" alt="" />
                        <h2>Intraday and F&O trades</h2>
                        <h6 className='m-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h6>
                    </div>
                    <div className="col-4" style={{marginTop:"100px"}}>
                        <img style={{width:"250px"}} src="media/images/pricing-eq.svg" alt="" />
                        <h2>Free direct MF</h2>
                        <h6 className='m-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h6>
                    </div>
                    <h5 style={{marginTop:"50px"}}>Calculate your costs upfront using our brokerage calculator</h5>
                </div>
            </div>
        </>
        
     );
}

export default Hero;