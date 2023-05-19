import React from 'react';
import { Link } from 'react-router-dom';

const toy = ({ toy }) => {
   const {sellerName, sellerEmail, toyName, photo, category, rating, price, quantity, details } = toy;

   return (
      <tr>
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className="mask mask-hexagon w-28 h-28">
                     <img src={photo} alt="Photo"/>
                  </div>
               </div>
            </div>
         </td>
         <td>
            <div className="font-bold">{toyName}</div>
         </td>
         <td>{sellerName}</td>
         <td>{category}</td>
         <td>{quantity}</td>
         <td>${price}</td>
         <th>
            <Link to="/toy-details" className="btn btn-outline btn-info btn-sm">View details</Link>
         </th>
      </tr>
   );
};

export default toy;