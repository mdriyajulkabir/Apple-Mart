import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, deleteItem } from "../../redux/action";
import "./Details.css";
const Details = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const { id } = useParams();
  const [phones, setPhone] = useState([]);
  useEffect(() => {
    fetch("https://mighty-coast-57668.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setPhone(data));
  }, []);
  const details = phones.find((x) => x.id === Number(id));

  const dispatch = useDispatch();

  const handleCart = (details) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(details));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(deleteItem(details));
      setCartBtn("Add to Cart");
    }
  };
  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img className="h-75" src={details?.img} alt={details?.title} />
          </div>
          <div className="details-description col-md-6 d-flex flex-column justify-content-center product">
            <h1 className="display-5 fw-bold">{details?.title}</h1> <hr />
            <p className="lead">{details?.description1}</p>
            <hr />
            <p className="lead">{details?.description2}</p>
            <hr />
            <p className="lead">{details?.description3}</p>
            <hr />
            <p className="lead">{details?.description4}</p>
            <hr />
            <p className="lead">{details?.description5}</p>
            <h2 className="my-4">৳{details?.price}</h2>
            <button
              onClick={() => handleCart(details)}
              className="btn btn-outline-primary my-5">
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
