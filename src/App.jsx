import { React, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import SearchPage from './SearchPage/SearchPage'
import './App.css'
import MainHeading from '/src/MainHeading/MainHeading'
import UpcSearchBar from '/src/UpcSearchBar/UpcSearchBar'
import UpcSearchResults from './UpcSearchResults/UpcSearchResults'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
