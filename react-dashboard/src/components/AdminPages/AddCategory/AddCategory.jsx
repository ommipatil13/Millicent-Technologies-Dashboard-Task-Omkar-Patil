import React from 'react'
import Layout from '../../Layout/Layout'
import Home from '../../Home/Home'
import { BsDownload } from 'react-icons/bs'
import { BsFillFunnelFill } from "react-icons/bs";
import { BsFunnelFill } from "react-icons/bs";

const AddCategory = () => {
    return (
        <Home>


            <div className='p-6'>

                {/* category listing div  */}
                <div className='flex justify-between items-center'>
                    <p className='text-2xl font-semibold' >Category Listing</p>

                    <div className='flex space-x-6 items-center'>
                        <BsDownload className='text-2xl text-green-600' />
                        <BsFillFunnelFill className='text-2xl text-green-600' />
                        {/* <BsFunnelFill className='text-2xl text-green-600' /> */}
                        <button className='bg-green-600 px-3 py-1.5 rounded-md text-white font-semibold 
                        hover:bg-green-500 hover:scale-105 transition-all'>+ Add Category</button>
                    </div>
                </div>

                {/* input div  */}
                <div>

                </div>


                {/* table div  */}
                <div></div>






            </div>



        </Home>
    )
}

export default AddCategory