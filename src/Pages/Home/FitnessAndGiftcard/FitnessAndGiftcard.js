import React from 'react';
import fitness from '../../../Images/fitness_plus__watch.jpg'
import giftCard from '../../../Images/giftcard_tile__gj4ru5nzgcya_large.jpg'
import './FitnessAndGiftcard.css'

const FitnessAndGiftcard = () => {
    return (
        <>
            <div className="pb-5">
        <div className="row w-100">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center px-5 mb-4">
            <div className="bg-white">
            <div className="pt-5 px-3">
            <h1 className="fw-bolder">
            <i class="fab fa-apple"></i> Fitness+
            </h1>
            <h4>
              The first fitness service powered by Apple Watch.
            </h4> <br />
            <div className='d-flex justify-content-around'>
            <a
              href="#savewithapple"
              className="fw-bold fs-5 d-flex align-items-center justify-content-center"
              style={{ textDecoration: "none" }}> 
              Try it free<sup>9</sup> <i class="gg-arrow-top-right"></i> 
            </a>
            <a
              href="#savewithapple"
              className="fw-bold fs-5"
              style={{ textDecoration: "none" }}>
              Learn more &gt;
            </a>
            </div>
            </div>
            <div className="fitness-plus-img">
              <img src={fitness} className='img-fluid' alt="" />
            </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center bg-whi">
            <div className="bg-white">
            <div className="pt-5 px-3">
            <h1 className="fw-bolder">
            <i class="fab fa-apple"></i> Gift Card
            </h1>
            <h4>
            For everything and everyone.
            </h4> <br />
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
            <div className="gift-card">
                <img src={giftCard} className="img-fluid" alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default FitnessAndGiftcard;