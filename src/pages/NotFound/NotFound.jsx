import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content text-center">
            <div>
               <div className='mb-8'>
                  <img src="https://i.ibb.co/f150jsk/notFound.jpg" alt="" />
               </div>
               <h1 className="text-5xl font-bold">Oops! <br />Page not found</h1>
               <p className="py-6">The page you are looking for could not be found.</p>
               <Link to="/" className="btn btn-outline btn-primary"> <FaArrowLeft className='mr-2'/> Back to Home</Link>
            </div>
         </div>
      </div>
   );
};

export default NotFound;