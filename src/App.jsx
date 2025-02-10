import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import AdminRoutes from './pages/admin/routes';
import ChefRoutes from './pages/chef/routes';
import TableRoutes from './pages/table/routes';

import ProtectedRoute from './ProtectedRoutes';

function App() {
  return (
    <main className='h-screen'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<ProtectedRoute />} />
          <Route
            path='/admin/*'
            element={<ProtectedRoute allowedRoles='admin' />}
          >
            <Route path='*' element={<AdminRoutes />} />
            
          </Route>
          <Route
            path='/chef/*'
            element={<ProtectedRoute allowedRoles='chef' />}
          >
            <Route path='*' element={<ChefRoutes />} />
          </Route>
          <Route
            path='/table/*'
            element={<ProtectedRoute allowedRoles='table' />}
          >
            <Route path='*' element={<TableRoutes />} />
          </Route>
          <Route element={<ProtectedRoute isPublic />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
