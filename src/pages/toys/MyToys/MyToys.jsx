import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import ToyRow from "./ToyRow";
import { Circles } from "react-loader-spinner";

const MyToys = () => {
   // const toys = useLoaderData();
   // const { sellerName, sellerEmail, toyName, photo, rating, price, quantity, details } = toys;
   const { users } = useContext(AuthContext)
   const [toy, setToy] = useState([]);
   const url = `http://localhost:5000/myToys/${users.email}`;
   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setToy(data);
         })
   }, [])

   return (
      <div className='bg-gray-50 py-10'>
         <h2 className='text-4xl text-stone-700 text-center font-bold mb-6'>All Toys Items</h2>



         <div className="form-control mb-8">
            <div className="input-group w-2/6 mx-auto">
               <input type="text" placeholder="Search…" className="input input-bordered w-full" />
               <button className="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
               </button>
            </div>
         </div>

         <div>
            <div className="container mx-auto overflow-x-auto w-full">
               <table className="table table-zebra w-full">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>Seller</th>
                        <th>toy Name</th>
                        <th>Sub Category</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th>Details</th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        toy.map(toy => <ToyRow
                           key={toy._id}
                           toy={toy}
                        ></ToyRow>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyToys;