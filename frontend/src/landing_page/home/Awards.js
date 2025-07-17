import React from 'react'
function Awards() {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 p-5">
                        <img src="media/images/largestBroker.svg" alt="largestBrokerImg" />
                    </div>
                    <div className="col-6 p-5 mt-3">
                        <h1>Largest stock broker in India</h1>
                        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in. </p>
                        <div className="row">
                            <div className="col-6">
                            <ul>
                                <li>
                                    <p>Feature and Options</p>
                                </li>
                                <li>
                                    <p>commodity derivatives</p>
                                </li>
                                <li>
                                    <p>currency derivatives</p>
                                </li>
                            </ul>
                            </div>
                            <div className="col-6">
                            <ul>
                                <li>
                                    <p>stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <img style={{width:"85%"}} src="media/images/pressLogos.png" alt="" />
                    </div>
                </div>
            </div>
            
        </>
     );
}

export default Awards;