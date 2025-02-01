import { Route, Routes } from 'react-router-dom';

import ChefDashboard from './dashboard';

function ChefRoutes() {
  return (
    <main className='h-full bg-slate-300'>
      <Routes>
        <Route path='/' element={<ChefDashboard />} />
      </Routes>
    </main>
  );
}

export default ChefRoutes;
