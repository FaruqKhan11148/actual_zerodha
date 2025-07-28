import React from 'react'
import OpenAccFree from './OpenAccFree';
import SignupNow from './SignupNow';
import Investment from './Investment';
import Steps from './Steps';
import UnbeatenPricing from './UnbeatenPricing';
import Explore from './Explore';
import Faqs from './Faqs';
import OpenAcc from './OpenAcc';

function Signup() {
    return ( 
        <>
        <OpenAccFree/>
        <Investment/>
        <Steps/>
        <UnbeatenPricing/>
        <Explore/>
        <Faqs/>
        <OpenAcc/>
        <SignupNow/>
        </>
     );
}

export default Signup;