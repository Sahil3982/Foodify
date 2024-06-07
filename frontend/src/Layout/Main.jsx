import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <footer>Heleo</footer>
        </>
    )
}

export default Main