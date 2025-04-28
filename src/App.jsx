import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ListHotels from './pages/ListHotels';
import Hotel from './pages/Hotel';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <>
      <div className='bg-blue-900 text-white w-full overflow-hidden'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/hotels' element={ <ListHotels /> } />
        <Route path='/hotels/:id' element={ <Hotel /> } />
      </Routes>
    </>
  );
};

export default App;