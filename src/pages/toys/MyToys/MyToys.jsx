import { useLoaderData } from "react-router-dom";

const MyToys = () => {
   const toys = useLoaderData();
   const { sellerName, sellerEmail, toyName, photo, rating, price, quantity, details } = toys;

   return (
      <div>
         <h2>Toy Name {toyName}</h2>
         <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur atque quisquam eius. Necessitatibus, iusto temporibus! Velit quae dolor aperiam similique iste, perspiciatis amet delectus, ipsam vel, a quisquam enim consequatur!</h3>
      </div>
   );
};

export default MyToys;