import React from 'react';
import { Routes,Route } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='about' element={<AboutMe></AboutMe>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;