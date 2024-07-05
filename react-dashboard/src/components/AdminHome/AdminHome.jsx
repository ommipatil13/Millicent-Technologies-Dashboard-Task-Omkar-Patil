import React, { useState } from 'react'
import { TbArrowBarToLeft } from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import AdminHomeNavbar from './AdminHomeNavbar';


const AdminHome = ({ setNavClose, navClose, }) => {
    // const [navClose, setNavClose] = useState(true)
    return (
        <div className='bg-zinc-100 flex items-center shadow-md shadow-zinc-500 '>

            <div>
                <button onClick={() => setNavClose(!navClose)} className='bg-white  p-1.5 outline-none rounded-md -ms-3 border ' >
                    {navClose ? <TbArrowBarToLeft /> : <TbArrowBarToRight />}
                </button>
            </div>

            <AdminHomeNavbar />


        </div>
    )
}

export default AdminHome