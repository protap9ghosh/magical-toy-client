import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy }) => {
   const { _id, sellerName, toyName, category, price, quantity } = toy;

   return (
      <tr>
         <td>{sellerName}</td>
         <td>
            <div className="font-semibold">{toyName}</div>
         </td>
         <td>{category}</td>
         <td>{quantity}</td>
         <td>${price}</td>
         <th className='flex'>
            <Link className="text-xl text-indigo-600 mr-4"><FaRegEdit/></Link>
            <Link className="text-xl text-red-500"><FaRegTrashAlt /></Link>
         </th>
      </tr>
   );
};

export default ToyRow;