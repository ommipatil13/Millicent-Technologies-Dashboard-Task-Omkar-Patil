import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { TbUserSquareRounded } from "react-icons/tb";

const AdminHomeNavbar = () => {
    const [openCloseSearch, setOpenCloseSearch] = useState(true)
    return (
        <div className='flex  w-screen justify-between px-6 h-20 items-center' >

            <ul className='flex space-x-8 text-gray-700 font-semibold '>
                <li className='hover:text-green-500'><NavLink to='/dashboard' >Dashboard  </NavLink></li>
                <li className='hover:text-green-500'><NavLink>Research  </NavLink></li>
                <li className='hover:text-green-500'><NavLink>Hierarchy  </NavLink></li>
                <li className='hover:text-green-500'><NavLink>Clients  </NavLink></li>
                <li className='hover:text-green-500'><NavLink>Analysts  </NavLink></li>
                <li className='hover:text-green-500'><NavLink to='/' >Settings  </NavLink></li>
                <li className='hover:text-green-500'><NavLink>Help  </NavLink></li>
            </ul>

            <div className='flex space-x-6 text-xl items-center'>
                <button onClick={() => setOpenCloseSearch(false)} className='outline-none' >
                    {openCloseSearch ?
                        <LuSearch />
                        :
                        <form>
                            <label htmlFor="search">  </label>
                            <input type="search" name="search" id="search" placeholder='Search'
                                className='rounded-lg bg-zinc-200 outline-none border-none 
                                 focus:bg-white placeholder:text-base px-4 py-1 focus:outline-none focus:border-none' />
                        </form>
                    }
                </button>
                <FaRegBell />
                <TbUserSquareRounded />
            </div>

        </div>
    )
}

export default AdminHomeNavbar