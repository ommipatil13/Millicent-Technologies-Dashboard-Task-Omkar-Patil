import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'

import Dashboard from './components/AdminPages/Dashboard'
import AddCategory from './components/AdminPages/AddCategory/AddCategory'

function App() {

  return (
    <>

      {/* <Home /> */}

      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<AddCategory />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </>
  )
}

export default App
