import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
      </Routes>
    </div>
  );
};

export default App;