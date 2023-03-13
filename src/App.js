import React, { Suspense } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import VendorRegistartion from './Pages/VendorRegistration/VendorRegistration';
import VendorDahboard from './Pages/VendorDashboard/VendorDahboard';
import ProfileDetails from './Pages/ProfileDetails/ProfileDetails';
import SideNavbar from './Components/SideNav/SideNav';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LoginNdSignUp from './Components/LoginNdSignUp/LoginNdSignUp';


const RouterConfig = () => ( 
  <BrowserRouter>
  <Suspense  fallback={
        <div className="flex items-center justify-center w-full h-screen">
          Loading...
        </div>
      }>
        {/* Public Routes */}
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/vendor-registration' element={<VendorRegistartion/>}/>
          <Route path='/atoz/vendor-dashboard' element={<VendorDahboard/>}/>
        <Route path="/vendor-profiledetails" element={<ProfileDetails/>}/>
        <Route path="/Login/authenticate" element={<LoginNdSignUp/>}/>
        {/* <Route path="/atoz/vendor-dashboard" element={<SideNavbar />}/> */}
          
        </Routes>
        {/* Private Routes */}
        {/* <Routes element={<PrivateRoute/>}>
      
        </Routes> */}
    
  </Suspense>
  </BrowserRouter>
)

export const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <SideNavbar/> */}
      <RouterConfig/>
    </div>
  )
}
