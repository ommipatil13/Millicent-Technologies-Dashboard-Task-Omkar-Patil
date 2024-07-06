import React, { useState } from 'react'

const AddCategoryTable = ({ item }) => {

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
                <td className=" py-4 text-right">
                    edit
                </td>
                <td className=" py-4 text-center">
                    del
                </td>
            </tr>

        </>


    )
}

export default AddCategoryTable