import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container" >
        <div className="row " style={{marginTop:"80px"}}>
          <div className="col-6 p-5"  style={{width:"450px", textAlign:"justify", marginLeft:"80px"}}>
            <h1 style={{marginTop:"80px"}}>{productName}</h1>
            <p>{productDescription}</p>
            <div className="">
              <a href={learnMore} style={{textDecoration:"none"}}>Learn More<i style={{color:"blue"}} class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-6" style={{marginTop:"-40px"}}>
            <img src={imageURL} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;