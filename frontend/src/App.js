import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './home';
import Locate from './locate';
import Auctions from './auctions';
import Register from './register';
import Dummy from './dummy';
import Product from './product';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Locate' element={<Locate />} />
      <Route path='Auction' element={<Auctions />} />
      <Route path='Register' element={<Register />} />
      <Route path='Product' element={<Product />} />

      <Route path='User' element={<Dummy />} />
      <Route path='Policy' element={<Dummy />} />
      <Route path='Cart' element={<Dummy />} />
      <Route path='FAQ' element={<Dummy />} />
    </Routes>
  );
}

export default App;
