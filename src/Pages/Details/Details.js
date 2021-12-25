import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './Details.css'
const Details = () => {
    const {id} = useParams()
    const [phones, setPhone] =useState([])
    useEffect(()=>{
        fetch('/output.json')
        .then(res=>res.json())
        .then(data=>setPhone(data))
    },[])
    const details = phones.find(x => x.id === Number(id))
    console.log(details);
    return (
        <div>
            <Header/>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img className='h-75' src={details?.img} alt={details?.title} />
                    </div>
                    <div className="details-description col-md-6 d-flex flex-column justify-content-center product">
                        <h1 className='display-5 fw-bold'>{details?.title}</h1> <hr />
                        <p className='lead'>{details?.description1}</p>
                        <hr />
                        <p className='lead'>{details?.description2}</p>
                        <hr />
                        <p className='lead'>{details?.description3}</p>
                        <hr />
                        <p className='lead'>{details?.description4}</p>
                        <hr />
                        <p className='lead'>{details?.description5}</p>
                        <h2 className='my-4'>৳{details?.price}</h2>
                        <button  className="btn btn-outline-primary my-5">buy now</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Details;