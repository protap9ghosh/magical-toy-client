import React from 'react';

const Login = () => {
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-96">
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <h2 className='text-5xl text-stone-700 text-center font-bold mt-8'>Login</h2>
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md border-none">Login</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;