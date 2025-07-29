import React from 'react';
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <>
      <div className="container" style={{marginTop:"50px"}}>
        <div className="row " style={{marginTop:"80px"}}>
          <div className="col-6 p-5">
            <img src={imageURL} />
          </div>
          <div className="col-6 p-5"  style={{width:"450px", textAlign:"justify", marginLeft:"80px"}}>
            <h1 style={{marginTop:"80px"}}>{productName}</h1>
            <p>{productDescription}</p>
            <div className="">
              <a href={tryDemo} style={{textDecoration:"none", marginRight:"30px"}}>Try Demo<i style={{color:"blue"}} class="fa-solid fa-arrow-right"></i></a>
              <a href={learnMore} style={{textDecoration:"none"}}>Learn More<i style={{color:"blue"}} className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div style={{marginTop:"30px"}}>
              <a href={googlePlay} style={{margin:"0 45px 0 0"}}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
              <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;