import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { instance } from './api';

// import { useEffect } from 'react';
// import { Loader2 } from 'lucide-react';

const ProtectedRoute = ({ isPublic, allowedRoles = '' }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
    //  API call to check authentication
    async function fetchUser() {
      try {
        const response = await instance.get('/auth/getme');
        setIsAuthenticated(false);
        setUser(response.data);
      } catch (e) {
        setIsAuthenticated(false);
        console.log(e);
        setUser(null);
      }
    }
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
      if (user.loggedAs === 'admin') {
        return <Navigate to='/admin' replace />;
      } else if (user.loggedAs === 'chef') {
        return <Navigate to='/chef' replace />;
      } else if (user.loggedAs === 'table') {
        return <Navigate to='/table' replace />;
      }
    } else {
      return <Outlet />;
    }
  }

  if (user) {
    if (user.loggedAs === 'admin' && allowedRoles === 'admin') {
      return <Outlet />;
    } else if (user.loggedAs === 'chef' && allowedRoles === 'chef') {
      return <Outlet />;
    } else if (user.loggedAs === 'table' && allowedRoles === 'table') {
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
