import React from 'react'

import { Outlet } from 'react-router'
import { Navbar } from '../components/shared/NavBar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout