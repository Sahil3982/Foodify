import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import '../App.css'
const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Main