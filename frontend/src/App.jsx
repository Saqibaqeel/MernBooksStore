import React from 'react'
import Navbar from './Navbar'
import Fotter from './Fotter'
import Home from './Components/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Courses from './Components/courses/courses'
import Login from './Login'
import SignUp from './SignUp'
import AboutUs from './AboutUs'

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes> {/* Use Routes instead of Router */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<AboutUs />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  )
}

export default App