import React, { useState } from 'react'
import SliderNavbar from '../SliderNavbar/SliderNavbar'
import AdminHome from '../AdminHome/AdminHome'

const Home = () => {
    const [navClose, setNavClose] = useState(true)
    return (
        <div className='flex min-h-screen' >

            {navClose && <SliderNavbar />}

            <AdminHome navClose={navClose} setNavClose={setNavClose} />

        </div>
    )
}

export default Home