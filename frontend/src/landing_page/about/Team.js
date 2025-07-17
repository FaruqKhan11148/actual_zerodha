import React from 'react'
function Team() {
    return ( 
        <>
            <div className="container">
                <h1 className='text-center fs-2 mt-5' >People</h1>
                <div className="row">
                    <div className="col-6" style={{textAlign:"center", margin:"-20px 0 0 80px"}}>
                        <img style={{borderRadius:"50%", height:"300px", width:"300px", margin:"80px 0 0 0"}} src="media/images/nithinKamath.jpg" alt="" />
                        <h5 className='mt-4'>Nithin Kamath</h5>
                        <p>Founder, CEO</p>
                    </div>
                    <div className="col-6" style={{margin:"80px 0 0 -100px", width:"500px"}}>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on Homepage / TradingQnA / Twitter</p>
                    </div>
                </div>

                <div className="row founders">
                    <div className="col-4">
                        <img src="media/images/Nikhil.jpg" alt="" />
                        <h5 className='h5'>Nikhil Kamath</h5>
                        <p className='p'>Co-founder & CFO</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/Kailash.jpg" alt="" />
                        <h5 className='h5'>Dr. Kailash Nadh</h5>
                        <p className='p'>CTO</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/Venu.jpg" alt="" />
                        <h5 className='h5'>Venu Madhav</h5>
                        <p className='p'>COO</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/Hanan.jpg" alt="" />
                        <h5 className='h5'>Hanan Delvi</h5>
                        <p className='p'>CCO</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/Seema.jpg" alt="" />
                        <h5 className='h5'>Seema Patil</h5>
                        <p className='p'>Director</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/karthik.jpg" alt="" />
                        <h5 className='h5'>Karthik Rangappa</h5>
                        <p className='p'>Chief of Education</p>
                    </div>
                </div>

            </div>
        </>
     );
}

export default Team;