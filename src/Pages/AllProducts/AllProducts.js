import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";

const AllProducts = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("./output.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row w-100">
          {phones.map((phone) => (
            <>
              <div className="col-lg-4 col-md-4 col-sm-12">
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
                    <NavLink to={``}></NavLink>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
