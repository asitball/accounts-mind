import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      </Routes>
    </div>
  );
};

export default App;