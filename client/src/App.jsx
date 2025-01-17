/* eslint-disable no-unused-vars */

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header.jsx'
import InventoryAdd from './components/InventoryAdd'
import OrderSummary from './components/OrderSummary'
import Inventory from './components/newInventory'

const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/inventory" element={<InventoryAdd />} />
      <Route path="/OrderSummary" element={<OrderSummary />} />
      <Route path="/newInventory" element={<Inventory />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
