import React, { useState } from 'react'
import SliderNavbar from '../SliderNavbar/SliderNavbar'
import AdminHome from '../AdminHome/AdminHome'

const Home = ({ children }) => {
    const [navClose, setNavClose] = useState(true)
    return (
        <div className='flex min-h-screen' >

            {navClose && <SliderNavbar />}

            <div className=' bg-zinc-200 overflow-y-scroll  space-y-2 w-screen' >
                <AdminHome navClose={navClose} setNavClose={setNavClose} />

                <main className='bg-red-600 h-96 m-2 rounded-md ' >
                    {children}
                </main>
            </div>

        </div>
    )
}

export default Home