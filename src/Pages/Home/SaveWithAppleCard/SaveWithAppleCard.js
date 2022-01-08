import React from "react";
import applephone from "../../../Images/applephonebackside.jpg";
import appleCard from "../../../Images/apple_card_new.jpg";
import "./SaveWithAppleCard.css";
const SaveWithAppleCard = () => {
  return (
    <>
      <div className="pb-5">
        <div className="row w-100">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center px-5 mb-4">
            <div className="bg-white">
            <div className="pt-5 px-3">
            <h1 className="fw-bolder">
              Trade in your <br /> smartphone for credit.
            </h1>
            <h4>
              With Apple Trade In, you can get credit toward a new Phone
              when you trade in an eligible smartphone.<sup>6</sup>
            </h4>
            <a
              href="#savewithapple"
              className="fw-bold fs-5"
              style={{ textDecoration: "none" }}>
              Learn more &gt;
            </a>
            </div>
            <div className="apple-phone-img">
              <img src={applephone} alt="" />
            </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center bg-whi">
            <div className="bg-white">
            <div className="pt-5 px-3">
            <h1 className="fw-bolder apple-card-text">
              Save 5% on iPhone <br />
              with a new Apple Card.
            </h1>
            <h4>
              Shop in stores or online now through <br />
              January 31. Only at Apple. <br />
              Exclusions and terms apply.<sup>†</sup>
            </h4>
            <a
              href="#savewithapple"
              className="fw-bold fs-5"
              style={{ textDecoration: "none" }}>
              Apply now &gt;
            </a>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp;
            <a
              href="#savewithapple"
              className="fw-bold fs-5"
              style={{ textDecoration: "none" }}>
              Learn more &gt;
            </a>
            </div>
            <div className="apple-card">
                <img src={appleCard} className="img-fluid" alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveWithAppleCard;
