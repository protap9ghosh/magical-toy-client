import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Toy from '../toy/toy';

const AllToys = () => {
   useTitle('All Toys');
   const AllToys = useLoaderData();
   const [toys, setToys] = useState([]);
   const url = 'http://localhost:5000/toy';
   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
         })
   }, [])

   return (
      <div className='bg-gray-50 py-10'>
         <h2 className='text-5xl text-stone-700 text-center font-bold'>All Toys</h2>
         <p className='w-1/2 mx-auto my-8 text-slate-500 text-[18px] text-center font-semibold'>Unleash your creativity and bond with furry friends through Toy Time Fun a collection of animal toys designed to inspire laughter and endless fun</p>
         <div>
            <div className="overflow-x-auto w-full">
               <table className="table w-full">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>Image</th>
                        <th>toy Name</th>
                        <th>Seller Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Details</th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        toys.map(toy => <Toy
                           key={toy._id}
                           toy={toy}
                        ></Toy>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AllToys;