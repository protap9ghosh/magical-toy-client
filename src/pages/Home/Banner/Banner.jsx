import React from 'react';

const Banner = () => {
   return (
      <div>
         <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/3661243/pexels-photo-3661243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                  <img src="https://demo.ishithemes.com/shopify/SHOPY107/asset/img/logo.png" alt="" />
                  <h1 className="mb-5 text-6xl font-bold">Toys Make Fantasies Real!</h1>
                  <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">LEARN MORE</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;