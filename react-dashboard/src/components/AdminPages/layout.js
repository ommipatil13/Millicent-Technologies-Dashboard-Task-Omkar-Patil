import React from 'react'
import AdminHome from '../AdminHome/AdminHome'
import SliderNavbar from '../SliderNavbar/SliderNavbar'
import Home from '../Home/Home'

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Home />
            {children}
        </div>
    )
}

export default AdminLayout