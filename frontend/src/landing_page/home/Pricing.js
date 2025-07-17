import React from 'react'

function Pricing() {
    return ( 
        <>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-4" style={{marginTop:"100px"}}>
                    <h1 className='mb-4 '>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="javascript:void(0)" style={{textDecoration:"none"}} >See pricing <i style={{color:"blue"}} class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col"></div>
                <div className="col-6" style={{marginTop:"100px"}}>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img style={{height:"90px"}} src="media/images/pricing-1.svg" alt=""/>
                                </div>
                                <div className="col">
                                    <h6 style={{fontSize:"11px", margin:"40px 0 0 -46px"}} className='text-muted'>Free account opening</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row ">
                                <div className="col">
                                    <img style={{height:"90px"}} src="media/images/pricing-2.svg" alt=""/>
                                </div>
                                <div className="col">
                                    <h6 style={{fontSize:"11px", margin:"40px 0 0 -46px"}} className='text-muted'>Free equity delivery
                                    and direct mutual funds</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row ">
                                <div className="col">
                                    <img style={{height:"90px"}} src="media/images/pricing-3.svg" alt=""/>
                                </div>
                                <div className="col">
                                    <h6 style={{fontSize:"11px", margin:"40px 0 0 -40px"}} className='text-muted'>Intraday and <br />
                                    F&O</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Pricing;