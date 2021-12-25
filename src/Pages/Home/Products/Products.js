import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
const Products = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("./output.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    <div className="container py-5">
      <h1 className="text-center productHeader">Which iPhone is Right for you ?</h1>
      <div className="row w-100">
        {phones.slice(0, 9).map((phone) => (
          
            <div key={phone.id} className="col-lg-4 col-md-4 col-sm-12">
              <div
                className="card  my-5 py-4"
                key={phone.id}
                style={{ width: "21rem", height: "85%" }}>
                <img
                  style={{ width: "100%" }}
                  src={phone.img}
                  className="card-img-top"
                  alt={phone.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{phone.title}</h5>
                  <p className="lead">৳{phone.price}</p>
                </div>
                <div>
                <div className="container">
                <NavLink to={`/product/${phone.id}`} className='btn btn-primary px-3 py-2 rounded-pill' >Details</NavLink>
                </div>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Products;
