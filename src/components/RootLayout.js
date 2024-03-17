import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './Navbar'
import { Provider } from 'react-redux';
import store from '../store/store';


const RootLayout = () => {
    return (
        <Provider store={store}>
            <div>
                <NavigationBar />
                <main>
                    <Outlet />
                </main>
            </div>
        </Provider>
    )
}

export default RootLayout
