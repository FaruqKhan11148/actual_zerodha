import React from 'react'

function Education() {
    return ( 
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-5" style={{marginTop:"100px"}}>
                    <img src="media/images/education.svg" alt="" />
                </div>
                
                <div className="col-2">

                </div>

                <div className="col-5" style={{marginTop:"100px"}}>
                    <h2 className='mb-4'>Free and open market education</h2>
                    <h6 className='mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</h6>
                    <a className='mb-4' href="javascript:void(0)" style={{textDecoration:"none"}} >Varsity <i style={{color:"blue"}} class="fa-solid fa-arrow-right"></i></a>
                    <h6 className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</h6>
                    <a className='mb-4' href="javascript:void(0)" style={{textDecoration:"none"}} >TradingQ&A <i style={{color:"blue"}} class="fa-solid fa-arrow-right"></i></a>
                </div>



            </div>
        </div>

</>
        
     );
}

export default Education;