import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PiSquaresFourFill } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";
import { FaAddressCard } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { TbHelpOctagonFilled } from "react-icons/tb";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsStack } from "react-icons/bs"
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const SliderNavbar = () => {

    const [showNavlink, setShowNavlink] = useState(true)

    const showHide = () => {
        setShowNavlink(!showNavlink)
    }

    return (
        <div className='bg-zinc-900 h-screen w-1/5  rounded-r-lg ps-4 pe-6 ' >

            <i className='text-red-600 inline-block mt-5 ml-5 ' >icon</i>

            <div className=' mt-10' >

                <ul className=' space-y-4 text-gray-400' >
                    <li className='hover:text-white'>
                        <NavLink to='/check' className='flex items-center' ><PiSquaresFourFill />&nbsp;&nbsp;Dashboard</NavLink>
                    </li>
                    <li className='hover:text-white'>
                        <NavLink className='flex items-center'><LuSearch />&nbsp;&nbsp;Research</NavLink>
                    </li>
                    <li className='hover:text-white'>
                        <NavLink className='flex items-center'  ><BsStack />&nbsp;&nbsp;Hierarchy</NavLink>
                    </li>
                    <li className='hover:text-white'>
                        <NavLink className='flex items-center'><HiMiniUserGroup />&nbsp;&nbsp;Clients</NavLink>
                    </li>
                    <li className='hover:text-white'>
                        <NavLink className='flex items-center'><FaAddressCard />&nbsp;&nbsp;Analysts</NavLink>
                    </li>

                    <li onClick={showHide}
                        className=' hover:text-white' >
                        <NavLink className='flex justify-between items-center'>
                            <span className='flex items-center'><RiSettings4Fill />&nbsp;&nbsp;Setting</span>

                            {showNavlink ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}

                        </NavLink></li>

                    {showNavlink && <ul className='  space-y-2  text-gray-400  '>
                        <li className='hover:bg-zinc-900 hover:text-white ps-4 py-1 rounded-md ' >
                            <NavLink> &#x2022; &nbsp;Manage Branch</NavLink></li>
                        <li className='hover:bg-zinc-900 hover:text-white ps-4 py-1 rounded-md '>
                            <NavLink> &#x2022; &nbsp;Manage User</NavLink></li>
                        <li className='hover:bg-zinc-900 hover:text-white  ps-4 py-1 rounded-md ' >
                            <NavLink to='/addcategory' > &#x2022; &nbsp;Add Category</NavLink></li>
                    </ul>}

                    <li className='hover:text-white'> <NavLink className='flex items-center'><TbHelpOctagonFilled />&nbsp;&nbsp;Help</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default SliderNavbar 