import React from 'react';
import './BundleOffer.css'
import bundle from '../../../Images/bundle__d7tp40dgdyuu_large.jpg'
import appleOne from '../../../Images/apple_one__bdecnltel2eq_large.jpg'
const BundleOffer = () => {
    return (
        <>
        <div className='my-5'>
            <div className=" bundleContainer ">
            <div className="row bg-white w-100 py-5">
                <div className="col-lg-6 col-md-6 col-sm-12  order-sm-1 order-md-1 text-center d-flex align-items-center justify-content-center">
                    <div className='mb-5'>
                    <img src={appleOne} className='img-fluid mb-4' alt="" /> 
                    <h3>Bundle up to six Apple services. <br /> And enjoy more for less.</h3>
                    <div className='pt-4'>
                    <a href="#bundleOffer" className='me-5' style={{ textDecoration: "none" }}>Try it free</a>
                    <a href="#bundleOffer"style={{ textDecoration: "none" }}>Learn more &gt;</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12  text-center d-flex align-items-center justify-content-center">
                    <div>
                    <img src={bundle} className='img-fluid ms-3' alt="" />
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default BundleOffer;