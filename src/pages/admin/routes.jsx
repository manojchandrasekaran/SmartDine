import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './dashboard';
import Counter from '@/features/Counter';

function AdminRoutes() {
  return (
    <main className='h-full bg-black'>
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path='/counter' element={<Counter />}/>
      </Routes>
    </main>
  );
}

export default AdminRoutes;
