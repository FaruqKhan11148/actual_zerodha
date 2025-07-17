import React from 'react'

function Hero() {
    return ( 
        <div className="container border-bottom ">
            <div className="row text-center mt-5 mb-5">
                <h1>Zerodha Products</h1>
                <h4 className='text-muted mt-3 fs-5'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-3'>Check out our <a href="javascript:void(0)" style={{textDecoration:"none"}}> investment offerings<i style={{color:"blue"}} class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     ); 
}

export default Hero;