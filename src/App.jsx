import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import BookRepair from './Pages/BookRepair'
import ScrollToTop from './Component/ScrollToTop'
import Training from './Pages/Training'

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/book-repair' element={<BookRepair/>}/>
        <Route path='/train' element={<Training/>}/>
      </Routes>
    </Router>
  )
}

export default App