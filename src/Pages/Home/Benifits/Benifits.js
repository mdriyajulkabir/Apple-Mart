import React from "react";
import delivery from '../../../Images/deliver.png'
import dollar from '../../../Images/dollar-coin.png'
import contact from '../../../Images/contact.png'
const Benifits = () => {
  return (
    <>
      <div className="container py-3">
      <div className="row w-100">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center p-4">
              <div className="mx-3">
                  <img src={delivery} className="w-25 mb-4" alt="" />
                  <h3>Free Delivery</h3>
                  <p>And free returns. See checkout for delivery dates.</p>
                  <a href="#benifit" style={{textDecoration: 'none'}}>Learn More &gt;  </a>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center p-4">
              <div className="mx-3">
                  <img src={dollar} className="w-25 mb-4" alt="" />
                  <h3>Pay monthly at 0% APR</h3>
                  <p>You can pay over time when you choose to check out with Apple Card Monthly Installments.*</p>
                  <a href="#benifit" style={{textDecoration: 'none'}}>Learn More &gt;  </a>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center p-4">
              <div className="mx-3">
                  <img src={contact} className="w-25 mb-4" alt="" />
                  <h3>Get help buying</h3>
                  <p>Have a question? call a Specialist or chat online. <br /> Call 1-800-MY-APPLE.</p>
                  <a href="#benifit" style={{textDecoration: 'none'}}>Learn More &gt;  </a>
              </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default Benifits;
