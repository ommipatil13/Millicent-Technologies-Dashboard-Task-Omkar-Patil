import React, { useState } from 'react'
import { TbArrowBarToLeft } from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import AdminHomeNavbar from './AdminHomeNavbar';


const AdminHome = ({ setNavClose, navClose, }) => {
    // const [navClose, setNavClose] = useState(true)
    return (
        <div className='lg:bg-zinc-50 lg:flex lg:items-center shadow-lg sm:hidden  '>

            <div>
                <button onClick={() => setNavClose(!navClose)} className='bg-white  p-1.5 outline-none 
                rounded-md  border ' >
                    {navClose ? <TbArrowBarToLeft /> : <TbArrowBarToRight />}
                </button>
            </div>

            <AdminHomeNavbar />


        </div>
    )
}

export default AdminHome