import React from 'react';
import './Home.css'
import Banner from './Banner/Banner';
import Benifits from './Benifits/Benifits';
import Header from './Header/Header';
import Products from './Products/Products';
import SpecialDeals from './SpecialDeals/SpecialDeals';
import IPhone from './iPhone13/IPhone';
import BundleOffer from './BundleOffer/BundleOffer';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div className='maindiv'>
            <Header/>
            {/* <Banner/> */}
            {/* <IPhone/> */}
            {/* <Products/> */}
            {/* <Benifits/> */}
            {/* <SpecialDeals/> */}
            {/* <BundleOffer/> */}
            {/* <Footer/> */}
        </div>
    );
};

export default Home;