import React from "react";
import phone from "../../../Images/iphone_13_pro__en2q051lfus2_large.jpg";
const iPhone = () => {
  return (
    <>
      <div className="text-center my-5 py-5" style={{ backgroundColor: "white", width: "100%" }}>
        <h3 className="bold">iPhone 13 Pro</h3>
        <h1>Oh. So. Pro.</h1>
        <p>From $41.562/mo. for 24 mo. or $999 before trade-in</p>
        <div className="pb-5">
          <button className="btn btn-primary rounded-pill me-3">Buy</button>
          <a href="s" className="ms-3" style={{textDecoration: 'none'}}>Learn more ></a>
        </div>
        <div >
          <img src={phone} className="img-fluid" alt="" />
        </div>
      </div>
    </>
  );
};

export default iPhone;
