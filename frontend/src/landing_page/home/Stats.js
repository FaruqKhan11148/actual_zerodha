
import React from 'react'

function Stats() {
    return ( 
        <div className="container p-3">
                <div className="row p-5">
                    <div className="col-5 p-5">
                        <h2 className='fs-2'>Trust with confidence</h2>

                        <h4 className='mt-5 fs-4'>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        
                        <h4 className='fs-4'>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
                        <h4 className='fs-4'>The Zerodha universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        
                        <h4 className='fs-4'>Do better with money</h4>
                        <p className='text-muted'>With initiatives like <a style={{textDecoration:"none"}} href="javascript:void(0)">Nudge</a> and <a style={{textDecoration:"none"}} href="javascript:void(0)">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    <div className="col-7 p-5">
                        <img style={{width:"80%"}} src="media/images/ecosystem.png" alt="awardImg" />
                        <div className='text-center'>
                            <a href="javascript:void(0)" className='mx-3' style={{textDecoration:"none"}} >Explore our products <i style={{color:"blue"}} class="fa-solid fa-arrow-right"></i></a>
                            <a href="javascript:void(0)" style={{textDecoration:"none"}} >Try Kite demo <i style={{color:"blue"}} class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <img style={{width:"55%", margin:"0 auto"}} src="media/images/pressLogos.png" alt="pressImg" />
                </div>
            </div>
     );
}

export default Stats;
