import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './Navbar'


const RootLayout = () => {
    return (
        <div>
            <NavigationBar />


            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
