import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './dashboard';

function AdminRoutes() {
  return (
    <main className='h-full bg-black'>
      <Routes>
        <Route index element={<AdminDashboard />} />
      </Routes>
    </main>
  );
}

export default AdminRoutes;
