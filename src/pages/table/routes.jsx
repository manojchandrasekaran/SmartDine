import { Route, Routes } from 'react-router-dom';

import TableDashboard from './dashboard';

function TableRoutes() {
  return (
    <main className='h-full bg-slate-300'>
      <Routes>
        <Route path='/' element={<TableDashboard />} />
      </Routes>
    </main>
  );
}

export default TableRoutes;
