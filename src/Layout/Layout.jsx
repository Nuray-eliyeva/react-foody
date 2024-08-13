import React from 'react'
import { Outlet } from 'react-router-dom'
import Foother from '../Companents/Foother'
import Navbar from '../Companents/Navbar'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Foother />
        </>
    )
}

export default Layout