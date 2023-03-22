import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Customer from './Layouts/Customer';


import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Customer /> */}
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
