import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router'
export const Main = () => {
  return (
    <>
    <NavBar> </NavBar>
    <Outlet />
    <Footer></Footer>
    </>
  )
}
