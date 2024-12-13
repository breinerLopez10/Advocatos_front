import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import HomePage from './pages/home/Home'
import LoginPage from './pages/login/Login'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path="/" element ={<HomePage/>} />
              <Route path="/Home" element ={<HomePage/>} />
              <Route path="/Login" element ={<LoginPage/>} />
          </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
