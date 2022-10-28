import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return <>
  <Router>

    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />

        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Work" element={<Work />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="*" element={<Home />} />
      </Routes>

  </Router>

  </>
  
}

export default App