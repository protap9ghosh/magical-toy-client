import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';

const MyToys = () => {
   useTitle('My Toys');
   // const { users } = useContext(AuthContext);
   // const [toys, setToys] = useState([]);
   // console.log(users.email);

   // const url = `https://magical-toy-server-protap9ghosh.vercel.app/toy?email=${users.email}`;
   // useEffect(() => {
   //    fetch(url)
   //       .then((res) => res.json())
   //       .then((data) => {
   //          console.log(data);
   //       })
   // }, [])

   return (
      <div>
         {/* <h2>{toys.length}</h2> */}
      </div>
   );
};

export default MyToys;