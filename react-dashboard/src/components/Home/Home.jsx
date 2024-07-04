import React from 'react'
import SliderNavbar from '../SliderNavbar/SliderNavbar'
import AdminHome from '../AdminHome/AdminHome'

const Home = () => {
    return (
        <div className='flex min-h-screen' >
            <SliderNavbar />
            <AdminHome />
        </div>
    )
}

export default Home