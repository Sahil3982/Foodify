import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const Main = () => {
    return (
        <>
            <Navbar>H</Navbar>
            <Outlet />
            <footer></footer>
        </>
    )
}

export default Main