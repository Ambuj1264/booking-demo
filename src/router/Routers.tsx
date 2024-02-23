import React from 'react'
import Header from '../components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/login/Login'
import Status404 from '../components/Status404'
import Locations from '../components/location/Locations'
import Picker from '../components/picker/Picker'
import Top20 from '../components/picker/Items/Top20'
const Routers = () => {
  return (
   <>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/selectLocations" element={<Locations/>}/>
    <Route path="/picker" element={<Picker/>}/>
    <Route path="/top20" element={<Top20/>}/>
    <Route path="*" element={<Status404/>}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default Routers