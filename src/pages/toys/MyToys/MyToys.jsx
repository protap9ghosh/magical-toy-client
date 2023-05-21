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
         <h2 className='text-4xl text-stone-700 text-center font-bold mb-6'>My toys</h2>

         <div className="form-control mb-8">
            <div className="input-group md:pl-[35%]">
               <select className="select select-bordered w-2/5">
                  <option disabled selected>Pick category</option>
                  <option>Ascending</option>
                  <option>Descending</option>
               </select>
               <button className="btn">Go</button>
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