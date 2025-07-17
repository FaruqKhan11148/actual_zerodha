import React from 'react'
function CreateTicket() {
    return ( 
        <>
            <div className="container mt-5 ">
                <div className="row mb-5">
                    <h4>To create a ticket, select a relevant topic</h4>
                    <div className="col-4 support_CreateTicket" style={{marginTop:"50px"}}>
                        <h5><i class="fa-solid fa-plus"></i>  Account Opening</h5>
                        <ul>
                            <a href="">Resident individual</a><br />
                            <a href="">Minor</a><br />
                            <a href="">Non Resident Indian (NRI)</a><br />
                            <a href="">Company, Partnership, HUF and LLP</a><br />
                            <a href="">Glossary</a>
                        </ul>
                        <h5 className='mt-5'><i class="fa-solid fa-wallet"></i>  Funds</h5>
                        <ul>
                            <a href="">Add money</a><br />
                            <a href="">Withdraw money</a><br />
                            <a href="">Add bank accounts</a><br />
                            <a href="">eMandates</a><br />
                        </ul>
                    </div>
                    <div className="col-4 mt-5 support_CreateTicket" style={{marginTop:"50px"}}>
                        <h5><i class="fa-regular fa-user"></i>  Your Zerodha Account</h5>
                        <ul>
                            <a href="">Your Profile</a><br />
                            <a href="">Account modification</a><br />
                            <a href="">Client Master Report (CMR) and Depository Participant (DP)</a><br />
                            <a href="">Nomination</a><br />
                            <a href="">Transfer and conversion of securities</a>
                        </ul>
                        <h5 className='mt-5'><i class="fa-regular fa-circle"></i>  Console</h5>
                        <ul>
                            <a href="">Portfolio</a><br />
                            <a href="">Corporate actions</a><br />
                            <a href="">Funds statement</a><br />
                            <a href="">Reports</a><br />
                            <a href="">Profile</a><br />
                            <a href="">Segments</a><br />
                        </ul>
                    </div>
                    <div className="col-4 mt-5 support_CreateTicket" style={{marginTop:"50px"}}>
                        <h5><i class="fa-solid fa-chart-simple"></i>  Kite</h5>
                        <ul>
                            <a href="">IPO</a><br />
                            <a href="">Trading FAQs</a><br />
                            <a href="">Margin Trading Facility (MTF) and Margins</a><br />
                            <a href="">Charts and orders</a><br />
                            <a href="">Alerts and Nudges</a>
                            <a href="">General</a>
                        </ul>
                        <h5 className='mt-5'><i class="fa-solid fa-coins"></i>  Coin</h5>
                        <ul>
                            <a href="">Understanding mutual funds and Coin</a><br />
                            <a href="">Coin app</a><br />
                            <a href="">Coin web</a><br />
                            <a href="">Transactions and reports</a><br />
                            <a href="">National Pension Scheme (NPS)</a><br />
                        </ul>
                    </div>
                </div>
            </div>

        </>
     );
}

export default CreateTicket;