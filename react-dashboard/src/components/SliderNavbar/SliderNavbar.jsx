import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PiSquaresFourFill } from 'react-icons/pi';
import { LuSearch } from 'react-icons/lu';
import { FaAddressCard } from 'react-icons/fa';
import { RiSettings4Fill } from 'react-icons/ri';
import { TbHelpOctagonFilled } from 'react-icons/tb';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { BsStack } from 'react-icons/bs';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SliderNavbar = () => {
    const [showNavlink, setShowNavlink] = useState(true);

    const showHide = () => {
        setShowNavlink(!showNavlink);
    };
    // h-screen h-full
    return (
        <div className="lg:bg-zinc-900  lg:w-1/5 lg:rounded-r-lg lg:ps-4 lg:pe-6 bg-zinc-900 w-screen">
            <i className="text-red-600 inline-block pt-5 pl-5 ">icon</i>

            <div className="mt-10">
                <ul className=" text-gray-400">
                    <li className="hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md">
                        <NavLink to="/dashboard" className="flex items-center">
                            <PiSquaresFourFill />
                            &nbsp;&nbsp;Dashboard
                        </NavLink>
                    </li>
                    <li className="hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md">
                        <NavLink to='/research' className="flex items-center">
                            <LuSearch />
                            &nbsp;&nbsp;Research
                        </NavLink>
                    </li>
                    <li className="hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md">
                        <NavLink to="/hierarchy" className="flex items-center">
                            <BsStack />
                            &nbsp;&nbsp;Hierarchy
                        </NavLink>
                    </li>
                    <li className="hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md">
                        <NavLink to='clients' className="flex items-center">
                            <HiMiniUserGroup />
                            &nbsp;&nbsp;Clients
                        </NavLink>
                    </li>
                    <li className="hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md">
                        <NavLink to='/analysts' className="flex items-center">
                            <FaAddressCard />
                            &nbsp;&nbsp;Analysts
                        </NavLink>
                    </li>

                    <li onClick={showHide} className=" hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md ">
                        <div className="flex justify-between items-center">
                            <NavLink
                                className="flex items-center">
                                <RiSettings4Fill />
                                &nbsp;&nbsp;Setting
                            </NavLink>

                            {showNavlink ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                    </li>

                    {showNavlink && (
                        <ul className="  space-y-2  text-gray-400  ">
                            <li className="hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md ">
                                <NavLink to='/manageBranch'> &#x2022; &nbsp;Manage Branch</NavLink>
                            </li>
                            <li className="hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md ">
                                <NavLink to='/manageUser'> &#x2022; &nbsp;Manage User</NavLink>
                            </li>
                            <li className="hover:bg-zinc-950 hover:text-white  px-4 py-2 rounded-md ">
                                <NavLink to="/"> &#x2022; &nbsp;Add Category</NavLink>
                            </li>
                        </ul>
                    )}

                    <li className="hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-md">

                        <NavLink to='/help'
                            className="flex items-center">
                            <TbHelpOctagonFilled />
                            &nbsp;&nbsp;Help
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SliderNavbar;
