import { Link, NavLink } from "react-router-dom";
import useTitle from '../../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaArrowLeft } from "react-icons/fa";

const ToyDetails = () => {
   useTitle('Toy Details');
   const toy = useLoaderData();
   const { sellerName, sellerEmail, toyName, photo, rating, price, quantity, details } = toy;

   return (
      <div className='bg-base-200 pt-5 pb-20'>
         <div className=" min-h-screen">
            <div className="hero-content flex-col md:flex-row">
               <img src={photo} className="w-[550px] h-[420px] rounded-md border border-sky-200 shadow-md" />
               <div className='md:ml-14'>
                  <h1 className="text-5xl font-bold pb-5">{toyName}</h1>
                  <p>
                     <span className='text-[17px] font-semibold'>Seller Name: </span>
                     {sellerName}
                  </p>
                  <p className="py-1">
                     <span className='text-[17px] font-semibold'>Seller Email: </span>
                     {sellerEmail}
                  </p>
                  <p>
                     <span className='text-[17px] font-semibold'>Available Quantity: </span>
                     {quantity}
                  </p>
                  <p className="py-1">
                     <span className='text-[17px] font-semibold'>Price: </span>
                     ${price}
                  </p>
                  <p className="flex mb-8">
                     <span><Rating style={{ maxWidth: 130 }} value={rating} readOnly /></span>
                     <span className='ml-2'>({rating})</span>
                  </p>
               </div>
            </div>

            <div className='md:w-1/2 md:ml-44 px-5'>
               <h2 className='text-3xl text-stone-700 font-semibold mt-8 mb-4'>Toy Details of {toyName}</h2>
               <p><span className='text-[17px] font-bold'>Details: </span>{details}</p>

               <Link to="/all-toy" className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md border-none capitalize text-[15px] mt-8"> <FaArrowLeft className="mr-2" /> All Toys</Link>
            </div>
         </div>
      </div>
   );
};

export default ToyDetails;