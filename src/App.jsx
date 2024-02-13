import { React, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import SearchPage from './SearchPage/SearchPage'
import RegisterPage from './RegisterPage/RegisterPage'
import ProfilePage from './ProfilePage/ProfilePage'
import './App.css'
import MainHeading from '/src/MainHeading/MainHeading'
import UpcSearchBar from '/src/UpcSearchBar/UpcSearchBar'
import FoodCard from './FoodCard/FoodCard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
