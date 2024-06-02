//import React from 'react'

import {Routes, Route} from 'react-router-dom'
import CreateVehicles from './pages/CreateVehicles';
import Home from './pages/Home';
import ShowVehicle from './pages/ShowVehicle';
import EditVehicle from './pages/EditVehicle';
import DeleteVehicle from './pages/DeleteVehicle';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderVehicle from './pages/OrderVehicle';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import Welcome from './pages/Welcome';
import HomeUser from './pages/HomeUser';
import ShowVehicleUser from './pages/ShowVehicleUser';
const App = () => {
  return (
    <Routes>
      <Route path= '/welcome' element={<Welcome/>}/>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/homeusers' element={<HomeUser/>}/>
      <Route path= '/vehicles/create' element={<CreateVehicles/>}/>
      <Route path= '/vehicles/details/:id' element={<ShowVehicle/>}/>
      <Route path= '/vehicles/detailsuser/:id' element={<ShowVehicleUser/>}/>
      <Route path= '/vehicles/edit/:id' element={<EditVehicle/>}/>
      <Route path= '/vehicles/delete/:id' element={<DeleteVehicle/>}/>
      <Route path= '/users/login' element={<Login/>}/>
      <Route path= '/users/register' element={<Register/>}/>
      <Route path= '/vehicles/Ordering/:id' element={<OrderVehicle/>}/>
      <Route path= '/admins/adminlogin' element={<AdminLogin/>}/>
      <Route path= '/admins/adminregister' element={<AdminRegister/>}/>

    </Routes>
  )
}

export default App