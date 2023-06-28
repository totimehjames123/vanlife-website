import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from './About'
import Home from './Home'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link> &nbsp;
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

