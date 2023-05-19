import React from 'react';

const toy = ({ toy }) => {
   const {sellerName, sellerEmail, toyName, photo, category, rating, price, quantity, details } = toy;

   return (
      <tr>
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className="mask mask-hexagon w-28 h-28">
                     <img src={photo} alt="Photo" />
                  </div>
               </div>
            </div>
         </td>
         <td>
            <div className="font-bold">{toyName}</div>
         </td>
         <td>{sellerName}</td>
         <td>{category}</td>
         <td>${price}</td>
         <th>
            <button className="btn btn-ghost btn-xs">details</button>
         </th>
      </tr>
   );
};

export default toy;