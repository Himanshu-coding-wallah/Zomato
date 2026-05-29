import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRegister from '../components/user/UserRegister.jsx'
import UserLogin from '../components/user/UserLogin.jsx'
import FoodPartnerRegister from '../components/food partner/FoodPartnerRegister.jsx'
import FoodPartnerLogin from '../components/food partner/FoodPartnerLogin.jsx'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth/register' element={<UserRegister/>} />
            <Route path='/auth/login' element={<UserLogin/>} />

            <Route path='/auth/food-partner/register' element={<FoodPartnerRegister/>}/>
            <Route path='/auth/food-partner/login' element={<FoodPartnerLogin/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes