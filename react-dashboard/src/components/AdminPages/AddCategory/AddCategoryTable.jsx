import React, { useState } from 'react'

const AddCategoryTable = ({ item }) => {

    return (

        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">No</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Segment</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Type</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Category Name</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Leg 1 Tracking</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Leg 2 Tracking</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"> {item.segment} </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.category_name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.leg_1_tracking}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.leg_2_tracking}</td>

                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg 
                                        border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 
                                        disabled:pointer-events-none">Edit</button>
                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg 
                                        border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 
                                        disabled:pointer-events-none">Del</button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddCategoryTable