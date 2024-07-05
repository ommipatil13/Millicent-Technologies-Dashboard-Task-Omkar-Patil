import React, { useState } from 'react'
import SliderNavbar from '../SliderNavbar/SliderNavbar'
import AdminHome from '../AdminHome/AdminHome'

const Home = ({ children }) => {
    const [navClose, setNavClose] = useState(true)
    return (
        <div className='flex min-h-screen' >

            {navClose && <SliderNavbar />}

            <div className=' bg-zinc-200 overflow-y-scroll   w-screen' >
                <AdminHome navClose={navClose} setNavClose={setNavClose} />

                <div className='bg-zinc-100 h-96 m-4 rounded-md  ' >
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Home