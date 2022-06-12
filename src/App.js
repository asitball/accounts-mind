import React from 'react';
import { Routes,Route } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;