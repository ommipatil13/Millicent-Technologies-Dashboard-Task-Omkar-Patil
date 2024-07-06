import React, { useState } from 'react'
import SliderNavbar from '../SliderNavbar/SliderNavbar'
import AdminHome from '../AdminHome/AdminHome'

const Home = ({ children }) => {
    const [navClose, setNavClose] = useState(true)
    return (
        <div className='flex h-screen' >

            {navClose && <SliderNavbar />}

            <div className=' bg-zinc-200 overflow-y-scroll  w-screen' >
                <AdminHome navClose={navClose} setNavClose={setNavClose} />

                <div className='bg-zinc-50 m-4 lg:rounded-md lg:shadow-md rounded-md shadow-md ' >
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Home