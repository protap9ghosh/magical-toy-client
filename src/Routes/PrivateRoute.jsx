import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { users, loading } = useContext(AuthContext);

   if (loading) {
      return (
         <div className='min-h-screen bg-slate-200'>
            <Circles
               height="80"
               width="80"
               color="#4fa94d"
               ariaLabel="circles-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
            />
         </div>);
   }

   if (users) {
      return children;
   }

   return (
      <Navigate state={{ from: location }} to="/login" replace>
         {children}
      </Navigate>
   );
};

export default PrivateRoute;