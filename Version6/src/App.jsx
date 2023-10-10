import React from 'react'
import Mercedes from './My-Garage/Mercedes'
import Porsche from './My-Garage/Porsche'
import Ford from './My-Garage/Ford'
import Home from './Page/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Page/NavBar'
import './App.css'

function App() {

  return (
    <>
      <div>
       <h1>Car Lot</h1>
      <NavBar />
       <Routes>
       <Route path="/" element ={<Home/>}/>
       <Route path="/mercedes" element ={<Mercedes/>} />
       <Route path="/porsche" element ={<Porsche/>} />
       <Route path="/ford" element ={<Ford/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
