import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import Home from '../../Home/Home'
import { BsDownload } from 'react-icons/bs'
import { BsFillFunnelFill } from "react-icons/bs";
import { BsFunnelFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import AddCategoryInput from './AddCategoryInput';
import { IoIosRefresh } from "react-icons/io";
import AddCategoryTable from './AddCategoryTable';
import tableData from '../../../tableData'

const AddCategory = () => {
    const [categoryInputSt, setCategoryInputSt] = useState(false)
    const [categoryInputNd, setCategoryInputNd] = useState(false)
    const [categoryInputRd, setCategoryInputRd] = useState(false)

    const [data, setData] = useState(tableData)
    console.log(data[0].id)
    return (
        <Home>


            <div className='p-5 '>

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
                <div className=' mt-4 flex space-x-7  '>

                    <AddCategoryInput inputTitle='Role' categoryInput={categoryInputSt} setCategoryInput={setCategoryInputSt} />
                    <AddCategoryInput inputTitle='Zone' categoryInput={categoryInputNd} setCategoryInput={setCategoryInputNd} />
                    <AddCategoryInput inputTitle='City' categoryInput={categoryInputRd} setCategoryInput={setCategoryInputRd} />

                    <div className='space-y-2 '>
                        <div>
                            <label htmlFor="name" className='text-zinc-400' >Name</label>
                        </div>
                        <div className='flex items-center space-x-7' >
                            <input type="text" name="name" id="name" placeholder='Search by Category'
                                className='ps-5 pe-16 py-2 items-center outline-none bg-white rounded-md shadow' />
                            <IoIosRefresh className='text-green-600 text-2xl' />
                        </div>
                    </div>

                </div>


                {/* table div  */}
                <div className=' mt-8'>
                    {data.map((item) => <AddCategoryTable key={item.id} item={item} />)}
                </div>



            </div>



        </Home>
    )
}

export default AddCategory