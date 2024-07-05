import React, { useState } from 'react'
import { TbArrowBarToLeft } from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import AdminHomeNavbar from './AdminHomeNavbar';


const AdminHome = ({ setNavClose, navClose, }) => {
    // const [navClose, setNavClose] = useState(true)
    return (
        <div className='bg-blue-400  '>

            <div className=' flex  ' >
                <button onClick={() => setNavClose(!navClose)} className='bg-white  p-1.5 outline-none rounded-md mt-5 -ml-3 ' >
                    {navClose ? <TbArrowBarToLeft /> : <TbArrowBarToRight />}
                </button>

                <AdminHomeNavbar />



            </div>

        </div>
    )
}

export default AdminHome