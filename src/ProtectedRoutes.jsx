// import { Navigate, Outlet } from 'react-router-dom';

// import { useEffect } from 'react';
// import { Loader2 } from 'lucide-react';

// const ProtectedRoute = ({ isPublic }) => {
//   useEffect(() => {
//     if (!user) {
//       //fetch user
//     }
//   }, []);

//   if (isAuthenticated && !user) {
//     return (
//       <div className='flex h-screen items-center justify-center'>
//         <Loader2 className='animate-spin' size={70} />
//       </div>
//     );
//   }

//   if (isPublic) {
//     if (user) {
//       return <Navigate to='/home' replace />;
//     }
//     return <Outlet />;
//   }

//   if (!isAuthenticated && !user) {
//     return <Navigate to='/login' replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;
