import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Counter from './features/Counter';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/admin' element={<App />}>
        
        </Route>
        <Route path='/login' index element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
