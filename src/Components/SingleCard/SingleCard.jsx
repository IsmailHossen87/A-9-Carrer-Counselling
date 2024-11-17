import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({card}) => {
    const {category,serviceName,pricing,counselorName,id,image} = card
    return (
        <div className="card bg-base-100  shadow-xl">
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
        <p>{pricing}</p>
        <div className='flex justify-between'> 
        <p>{counselorName}</p>
            <Link  className='text-blue-700' to={`/details/${id}`}>Learn More...</Link></div>
        </div>
       
      </div>
    </div>
    );
};

export default SingleCard;