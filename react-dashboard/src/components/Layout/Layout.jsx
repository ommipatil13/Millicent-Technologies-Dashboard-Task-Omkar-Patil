import React from 'react'
import AdminHome from '../AdminHome/AdminHome'
import SliderNavbar from '../SliderNavbar/SliderNavbar'
import Home from '../Home/Home'

const Layout = ({ children }) => {
    return (
        <div>

            <Home />

            <main className='bg-red-400' >
                {children}
            </main>

        </div>
    )
}

export default Layout