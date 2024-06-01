import React from 'react'
import { Outlet } from 'react-router'

const Main = () => {
    return (
        <>
            <div>Main</div>
            <Outlet />
            <footer></footer>
        </>
    )
}

export default Main