import React from 'react';
import Blog from '../../Blog/Blog';
import ShopCategory from '../../ShopCategory/ShopCategory';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
   useTitle('Home');

   return (
      <div className='container mx-auto'>
         <ShopCategory></ShopCategory>
      </div>
   );
};

export default Home;