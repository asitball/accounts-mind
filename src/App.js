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
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Blogs from './components/Blogs/Blogs';
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
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;