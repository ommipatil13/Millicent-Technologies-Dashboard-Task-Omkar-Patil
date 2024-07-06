import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const AddCategoryInput = ({ inputTitle, categoryInput, setCategoryInput }) => {
    return (
        <div className='lg:space-y-2 space-y-1'>
            <p className='text-zinc-400'>{inputTitle}</p>
            <div className='bg-white rounded-md shadow ' >
                <button onClick={() => setCategoryInput(!categoryInput)}
                    className='flex lg:space-x-16 space-x-1 lg:px-5 lg:py-2 
                    items-center outline-none shadow rounded-md px-2 py-2'
                ><span className='text-zinc-400' > {inputTitle} </span>
                    {categoryInput ?
                        <IoIosArrowUp className='text-green-600' /> : <IoIosArrowDown className='text-green-600' />}
                </button>

                {categoryInput && <ul className=' text-center pt-2 space-y-1 ' >
                    <li>role 1</li>
                    <li>role 2</li>
                </ul>}
            </div>
        </div>
    )
}

export default AddCategoryInput