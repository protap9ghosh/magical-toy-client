import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
   useTitle('Toy Details');
   const toy = useLoaderData();
   const { sellerName, sellerEmail, toyName, photo, rating, price, quantity, details } = toy;

   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
               <img src={photo} className="max-w-lg rounded-md shadow-md" />
               <div>
                  <h1 className="text-5xl font-bold pb-4">{toyName}</h1>
                  <p className=""><span className='text-[17px] font-semibold'>Seller Name:</span> {sellerName}</p>
                  <p className=""><span className='text-[17px] font-semibold'>Seller Email:</span> {sellerEmail}</p>
                  <p className=""><span className='text-[17px] font-semibold'>Price:</span> ${price}</p>
                  <p className="">{rating}</p>
                  <p className=""><span className='text-[17px] font-semibold'>Available Quantity:</span> {quantity}</p>
                  <button className="btn btn-primary">Get Started</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ToyDetails;
// https://rb.gy/c5r40