import React from "react";
import atta from "../../../Images/logo_att.jpg";
import mobile from "../../../Images/logo_t_mobile_sprint.jpg";
import virzone from "../../../Images/logo_verizon.jpg";
const SpecialDeals = () => {
  return (
    <>
      <div className="py-5">
        <div className="container bg-white pt-5 ">
          <div className="text-center pb-5">
            <h3>Special Carrier deals at Apple</h3>
            <h2>Save up to $1000 on the newest iPhone after trade-in.</h2>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="row text-center">
              <div className="col-lg-4 col-md-4 col-sm-12 ">
                <img src={atta} className="w-50 mb-3" alt="" />
                <p>Save up to $1000</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 ">
                <img src={mobile} className="w-75 mb-3" alt="" />
                <p>Get $400 - $900 in credit</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 ">
                <div className="mb-4">
                  <img src={virzone} className="w-75" alt="" />
                </div>
                <p>Save up to $440</p>
              </div>
            </div>
          </div>

          <div className="text-center my-4">
            <button className="btn btn-primary px-5 py-3 rounded-pill">
              Find your deal
            </button>
          </div>
          <div className="text-center  py-3">
            <h5>
              Our Specialists can help you shop -- online or in store. <br />{" "}
              <br />
              <a href="#SpecialDeal" style={{ textDecoration: "none" }}>
                Connet with an iPhone Specialist &gt;
              </a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialDeals;
