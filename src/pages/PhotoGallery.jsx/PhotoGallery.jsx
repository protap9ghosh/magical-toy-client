import React from 'react';

const PhotoGallery = () => {
   return (
      <div>
         <div>
            <h1 className='text-6xl font-medium text-center mt-20'> <span className='text-orange-500'>Photo</span> Gallery</h1>
            <p className='mt-5 mb-6 text-center md:w-1/4 m-auto font-medium'>Animal toys best photo Gallery...</p>
         </div>
         <div className='flex items-center justify-center container mx-auto'>
            <div className='grid grid-cole-1 lg:grid-cols-3'>
               <div className='rounded-xl'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden '>
                        <img className='m-auto' src="https://rb.gy/lyo8g" alt="" />
                     </div>
                  </div>
               </div>
               <div className='rounded-xl'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden '>
                        <img className='m-auto' src="https://rb.gy/yor85" alt="" />
                     </div>
                  </div>
               </div>
               <div className='rounded-xl'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden '>
                        <img className='m-auto' src="https://rb.gy/bbred" alt="" />
                     </div>
                  </div>
               </div>
               <div className='rounded-xl'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden '>
                        <img className='m-auto' src="https://rb.gy/l2gxv" alt="" />
                     </div>
                  </div>
               </div>
               <div className='rounded-xl'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden '>
                        <img className='m-auto' src="https://rb.gy/e3kq4" alt="" />
                     </div>
                  </div>
               </div>
               <div className='rounded-xl'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden '>
                        <img className='m-auto' src="https://rb.gy/ex285" alt="" />
                     </div>
                  </div>
               </div>




            </div>
         </div>

      </div>
   );
};

export default PhotoGallery;