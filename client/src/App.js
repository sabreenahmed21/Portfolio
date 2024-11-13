import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MySwiperComponent from './Pages/Home'
import Project from './components/Project'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MySwiperComponent />} />
      <Route path='/my-project' element={<Project/>} />
    </Routes>
    </BrowserRouter>
  )
}

