import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SliderNavbar = () => {

    const [showNavlink, setShowNavlink] = useState(true)

    const showHide = () => {
        setShowNavlink(!showNavlink)
    }

    return (
        <div className='bg-zinc-800 w-1/5 rounded-r-lg pl-5' >

            <i className='text-red-600 inline-block mt-5 ml-5 ' >i</i>

            <div className='bg-green-300 mt-10' >

                <ul className='bg-pink-400 space-y-3' >
                    <li>  <NavLink>Dashboard</NavLink></li>
                    <li>  <NavLink>Research</NavLink></li>
                    <li> <NavLink>Hierarchy</NavLink></li>
                    <li> <NavLink>Clients</NavLink></li>
                    <li> <NavLink>Analysts</NavLink></li>

                    <li className='bg-blue-800 hover:cursor-pointer' onClick={showHide} >
                        <NavLink>Settings <span>^</span></NavLink>
                        {showNavlink && <ul className='bg-red-200 p-5'>
                            <li>ok</li>
                            <li>ok</li>
                        </ul>}
                    </li>

                    <li> <NavLink>Help</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default SliderNavbar 