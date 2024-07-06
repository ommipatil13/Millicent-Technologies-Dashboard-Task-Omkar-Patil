import React, { useState } from 'react'
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";


const AddCategoryTable = ({ item, onDelete }) => {

    return (

        <>
            <tr className="bg-white border-b">

                <td className="px-4 py-4">
                    {item.id}
                </td>
                <td className="px-4 py-4 ">
                    {item.segment}
                </td>
                <td className="px-4 py-4">
                    {item.type}
                </td>
                <td className="px-4 py-4">
                    {item.category_name}
                </td>
                <td className="px-4 py-4">
                    {item.leg_1_tracking}
                </td>
                <td className="px-4 py-4">
                    {item.leg_2_tracking}
                </td>
                <td className=" py-4 ">
                    <MdOutlineModeEdit className='text-lg' />
                </td>
                <td className=" py-4 ">
                    <button onClick={() => onDelete(item.id)} ><RiDeleteBin5Line className='text-lg' /></button>
                </td>
            </tr>

        </>


    )
}

export default AddCategoryTable