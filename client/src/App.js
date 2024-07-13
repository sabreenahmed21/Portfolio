import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MySwiperComponent from './Pages/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MySwiperComponent />} />
    </Routes>
    </BrowserRouter>
  )
}

