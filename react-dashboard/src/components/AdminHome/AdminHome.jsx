import React, { useState } from 'react'
import { TbArrowBarToLeft } from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import AdminHomeNavbar from './AdminHomeNavbar';
import AddCategory from '../AdminPages/AddCategory';

const AdminHome = ({ setNavClose, navClose, }) => {
    // const [navClose, setNavClose] = useState(true)
    return (
        <div className='bg-blue-400 w-screen'>

            <div className='bg-orange-200 flex ' >
                <button onClick={() => setNavClose(!navClose)} className='bg-white p-1.5 outline-none rounded-md mt-5 -ml-1.5' >
                    {navClose ? <TbArrowBarToLeft /> : <TbArrowBarToRight />}
                </button>

                <AdminHomeNavbar />

                {/* <AddCategory /> */}

            </div>

        </div>
    )
}

export default AdminHome