import React from "react";
import "./Home.css";
import Banner from "./Banner/Banner";
import Benifits from "./Benifits/Benifits";
import Products from "./Products/Products";
import SpecialDeals from "./SpecialDeals/SpecialDeals";
import IPhone from "./iPhone13/IPhone";
import BundleOffer from "./BundleOffer/BundleOffer";
import SaveWithAppleCard from "./SaveWithAppleCard/SaveWithAppleCard";
import FitnessAndGiftcard from "./FitnessAndGiftcard/FitnessAndGiftcard";

const Home = () => {
  return (
    <div className="maindiv">
      <Banner />
      <IPhone />
      <Products />
      <Benifits />
      <SpecialDeals />
      <BundleOffer />
      <SaveWithAppleCard/>
      <FitnessAndGiftcard/>
    </div>
  );
};

export default Home;
