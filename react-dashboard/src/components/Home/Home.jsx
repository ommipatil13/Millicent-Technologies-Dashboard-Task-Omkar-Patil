import React, { useState } from 'react'
import SliderNavbar from '../SliderNavbar/SliderNavbar'
import AdminHome from '../AdminHome/AdminHome'

const Home = ({ children }) => {
    const [navClose, setNavClose] = useState(true)
    return (
        <div className='flex min-h-screen' >

            {navClose && <SliderNavbar />}

            <div className='w-screen' >
                <AdminHome navClose={navClose} setNavClose={setNavClose} />

                <main className='bg-red-400 ' >
                    {children}
                </main>
            </div>


        </div>
    )
}

export default Home