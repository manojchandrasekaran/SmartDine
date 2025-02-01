import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

// import { useEffect } from 'react';
// import { Loader2 } from 'lucide-react';

const ProtectedRoute = ({ isPublic, allowedRoles = '' }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // if (!user) {
    //       //fetch user
    //     }
    //  API call to check authentication
    setTimeout(() => {
      setIsAuthenticated(false);
      setUser({ id: 1, name: 'John Doe' });
    }, 2000);
  }, []);

  if (isAuthenticated) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <Loader2 className='animate-spin' size={70} />
      </div>
    );
  }
  if (isPublic) {
    if (user) {
      if (user.id === 1) {
        return <Navigate to='/admin' replace />;
      } else if (user.id === 2) {
        return <Navigate to='/chef' replace />;
      } else if (user.id === 3) {
        return <Navigate to='/table' replace />;
      }
    } else {
      return <Outlet />;
    }
  }

  if (user) {
    if (user.id === 1 && allowedRoles === 'admin') {
      return <Outlet />;
    } else if (user.id === 2 && allowedRoles === 'chef') {
      return <Outlet />;
    } else if (user.id === 3 && allowedRoles === 'table') {
      return <Outlet />;
    } else {
      return (
        <Navigate to='/login' state={{ from: location }} replace relative />
      );
    }
  } else {
    return <Navigate to='/login' state={{ from: location }} replace relative />;
  }
};

export default ProtectedRoute;
