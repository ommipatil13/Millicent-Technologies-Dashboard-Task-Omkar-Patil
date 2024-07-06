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

    //dropdown states
    const [categoryInputSt, setCategoryInputSt] = useState(false)
    const [categoryInputNd, setCategoryInputNd] = useState(false)
    const [categoryInputRd, setCategoryInputRd] = useState(false)

    //table data
    const [data, setData] = useState(tableData)
    const [dataUpdate, setDataUpdate] = useState(tableData)
    console.log(data[0].id)

    //search function state
    const [search, setSearch] = useState('')

    //search function 
    const onSearch = (text) => {
        if (text === '') {
            setData(dataUpdate)
        }

        else {
            let tempList = data.filter(item => {
                return item.category_name.toLowerCase().indexOf(text.toLowerCase()) > -1; //-1 false
            })
            setData(tempList)
        }
    }

    //delete button
    const onDelete = (id) => {

        const del = data.filter((val) => val.id !== id)
        setData(del)
    }


    return (
        <Home>

            <div className='lg:px-5 lg:py-5  py-5 px-3 w-full '>

                {/* category listing div  */}
                <div className='lg:flex lg:justify-between lg:items-center flex justify-between items-center'>
                    <p className='lg:text-2xl font-semibold text-xl ' >Category Listing</p>

                    <div className='lg:flex lg:space-x-6 lg:items-center flex space-x-2 items-center'>
                        <BsDownload className='text-2xl text-green-600' />
                        <BsFillFunnelFill className='text-2xl text-green-600' />
                        {/* <BsFunnelFill className='text-2xl text-green-600' /> */}
                        <button className='bg-green-600 lg:px-3 lg:py-1.5  rounded-md text-white font-semibold 
                        hover:bg-green-500 hover:scale-105 transition-all py-1.5 px-2 '>+ Add Category</button>
                    </div>
                </div>

                {/* input div  */}
                <div className=' lg:mt-4 lg:flex lg:space-x-7 lg:w-full  mt-4 flex space-x-1  '>

                    <AddCategoryInput inputTitle='Role' categoryInput={categoryInputSt} setCategoryInput={setCategoryInputSt} />
                    <AddCategoryInput inputTitle='Zone' categoryInput={categoryInputNd} setCategoryInput={setCategoryInputNd} />
                    <AddCategoryInput inputTitle='City' categoryInput={categoryInputRd} setCategoryInput={setCategoryInputRd} />

                    <div className='lg:space-y-2 space-y-1 '>
                        <div>
                            <label htmlFor="name" className='text-zinc-400' >Name</label>
                        </div>
                        <div className='flex items-center lg:space-x-7 space-x-2' >
                            <input value={search} onChange={(e) => {
                                setSearch(e.target.value)
                                onSearch(e.target.value)
                            }}
                                type="text" name="name" id="name" placeholder='Search by Category'
                                className='lg:ps-5 lg:pe-16 lg:py-2 items-center lg:w-full outline-none bg-white rounded-md shadow
                                 py-2 px-2 w-28' />
                            <button onClick={() => setData(dataUpdate)} >
                                <IoIosRefresh className='text-green-600 text-2xl' />
                            </button>
                        </div>
                    </div>

                </div>


                {/* table div  */}
                {/* <div className=' mt-8'> */}

                <div className="relative overflow-x-auto   mt-8">
                    <table className="w-full text-sm text-left rtl:text-right text-zinc-600 ">

                        <thead className="text-xs text-gray-400  bg-gray-200 ">
                            <tr>
                                <th scope="col" className="px-4 py-3 ">
                                    No
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Segment
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Type
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Category Name
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Leg 1 Tracking
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Leg 2 Tracking
                                </th>
                                <th scope="col" className="px-4 py-3">

                                </th>
                                <th scope="col" className="px-4 py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map((item) => <AddCategoryTable key={item.id} item={item} onDelete={onDelete} />)}


                        </tbody>
                    </table>
                </div>

                {/* </div> */}



            </div>



        </Home>
    )
}

export default AddCategory