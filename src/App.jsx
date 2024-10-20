import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import Gallery from './screens/gallery/Gallery'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './screens/about/About'
import Tours from './screens/tours/Tours'
import TourInfo from './screens/tourinfo/TourInfo'
import TourRoutes from './screens/routes/Routes'
import Contact from './screens/contact/Contact'
import { Toaster } from "react-hot-toast"
import Loader from './components/Loader/Loader'

const App = () => {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2500)
  }, [])
  return (
    <>
      {
        loader ? <Loader /> :
          <div>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/about' element={<About />} />
              <Route path='/tours' element={<Tours />} />
              <Route path='/routes' element={<TourRoutes />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/tour/:tourname' element={<TourInfo />} />
              <Route path='*' element={<Home />} />
            </Routes>
            <Footer />
            <Toaster />
          </div>
      }


    </>
  )
}

export default App
