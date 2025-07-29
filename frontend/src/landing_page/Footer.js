import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(250,250,250)' }}>
    <div className="container main-ftr border-top mt-5">
      <div className="row mt-5">
        <div className="col-3">
          <img style={{ width: '150px' }} className='mb-4' src="media/images/logo.svg" alt="" />
          <p style={{fontSize:"10px"}}>
            &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>
          <div className="footer footer-links mt-5">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <hr />
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-telegram"></i>
            
          </div>
        </div>
        <div className="col-3 footer">
          <ul>
            <h6>Company</h6>
            <a href="javascript:void(0)">About</a><br />
            <a href="javascript:void(0)">Products</a><br />
            <a href="javascript:void(0)">Pricing</a><br />
            <a href="javascript:void(0)">Referral Programme</a><br />
            <a href="javascript:void(0)">Careers</a><br />
            <a href="javascript:void(0)">Zerodha.tech</a><br />
            <a href="javascript:void(0)">Open source</a><br />
            <a href="javascript:void(0)">Press & media</a><br />
            <a href="javascript:void(0)">Zerodha Cares (CSR)</a>
          </ul>
        </div>
        <div className="col-3 footer">
          <ul>
            <h6>Support</h6>
            <a href="javascript:void(0)">Contact us</a><br />
            <a href="javascript:void(0)">Support portal</a><br />
            <a href="javascript:void(0)">Z-Connect blog</a><br />
            <a href="javascript:void(0)">List of charges</a><br />
            <a href="javascript:void(0)">Downloads & resources</a><br />
            <a href="javascript:void(0)">Videos</a><br />
            <a href="javascript:void(0)">Market overview</a><br />
            <a href="javascript:void(0)">How to file a complaint?</a><br />
            <a href="javascript:void(0)">Status of your complaints</a>
          </ul>
        </div>
        <div className="col-3 footer">
          <ul>
            <h6>Account</h6>
            <a href="javascript:void(0)">Open an account</a><br />
            <a href="javascript:void(0)">Fund transfer</a>
          </ul>
        </div>

        <div className="content">
          <p className="mt-5">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <div>
            <a style={{ textDecoration: 'none' }} href="#" onClick={(e) => e.preventDefault()}>
              Smart Online Dispute Resolution
            </a>{' '}
            |{' '}
            <a style={{ textDecoration: 'none' }} href="#" onClick={(e) => e.preventDefault()}>
              Grievances Redressal Mechanism
            </a>
          </div>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
      <ul className='last-line'>
        <li>NSE</li>
        <li>BSE</li>
        <li>MCX</li>
        <li>Terms & conditions</li>
        <li>Policies & procedures</li>
        <li>Privacy policy</li>
        <li>Disclosure</li>
        <li>For investor's attention </li>
        <li>Investor charter</li>
      </ul>
    </div>
  </footer>
  );
}

export default Footer;