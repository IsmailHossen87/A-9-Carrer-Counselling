import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleCard = ({card}) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    const {category,serviceName,description,counselorName,id,image,dateTime} = card
    return (
        <div className="card bg-base-100 mx-2 shadow-xl"
        data-aos="fade-up">

      <figure>
        <img 
        className='h-[250px] w-full'
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className='space-y-3'>
        <h2 className="card-title">{serviceName}</h2>
        <p>{category}</p>
        <p>{dateTime}</p>
        <p>{counselorName}</p>
        <div className='flex justify-between'> 
            <p>{description?.slice(0,33)}</p>
            <Link  className='text-blue-700' to={`/details/${id}`}>learn More...</Link></div>
        </div>
       
      </div>
    </div>
    );
};

export default SingleCard;