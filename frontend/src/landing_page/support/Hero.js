import React from 'react'

function Hero() {
    return ( 
        <>
            <div className="container">
                <div className="row support_hero">
                    <div className='hero_content'>
                        <div style={{display:"flex", justifyContent:"space-between", marginTop:"40px"}}>
                            <h4>Support Portal</h4>
                            <h5 style={{textDecoration:"underline"}}>Track tickets</h5>
                        </div>
                        <div className="row ">
                            <div className='main_row'>
                                <div className="col-6 mt-5 hero_div1">
                                    <h4 >Search for an answer or browse help topics to create a ticket</h4>
                                    <div className="hero_search" style={{width:"650px", backgroundColor:"white", borderRadius:"2px", marginTop:"50px"}}>
                                        <input style={{width:"600px",borderRadius:"2px", height:"60px", border:"none",outline:"none"}} type="text" placeholder='Eg: how do i active F&Q, why is my order getting rejected.... ' />
                                        <i style={{color:"black"}} class="fa-solid fa-magnifying-glass "></i>
                                    </div>
                                    <div style={{marginTop:"20px",width:"700px",display:"flex", justifyContent:"space-evenly", textDecoration:"underline"}}>
                                        <h6>Track account opening</h6>
                                        <h6>Track segment activation</h6>
                                        <h6>Intraday margins</h6>
                                        <h6>Kite user manual</h6>
                                    </div>
                                </div>
                                <div className="col-6 hero_div2" style={{margin:" 100px 0 0 120px"}}>
                                    <h4>Featured</h4>
                                    <p style={{textDecoration:"underline"}}>1. Latest Intraday leverages and Square-off timings</p>
                                    <p style={{textDecoration:"underline"}}>2. Surveillance measure on scrips - March 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Hero;