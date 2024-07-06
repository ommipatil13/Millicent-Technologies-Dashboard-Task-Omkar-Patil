import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import { FaRegBell } from 'react-icons/fa';
import { TbUserSquareRounded } from 'react-icons/tb';

const AdminHomeNavbar = () => {
    const { pathname } = useLocation();
    const [openCloseSearch, setOpenCloseSearch] = useState(true);
    return (
        <div className="lg:flex  lg:w-full lg:justify-between lg:px-6 lg:h-20 lg:items-center hidden lg:block md:block ">
            <ul className="flex space-x-8 text-gray-700  ">
                <li className={`text-gray-600 font-bold ${pathname.includes('dashboard') && 'text-green-500'}`}>
                    <Link to="/dashboard">Dashboard </Link>
                </li>
                <li className={`text-gray-600 font-bold ${pathname.includes('research') && 'text-green-500'}`}>
                    <Link to='/research'>Research </Link>
                </li>
                <li className={`text-gray-600 font-bold ${pathname.includes('hierarchy') && 'text-green-500'}`}>
                    <Link to='/hierarchy'>Hierarchy </Link>
                </li>
                <li className={`text-gray-600 font-bold ${pathname.includes('clients') && 'text-green-500'}`}>
                    <Link to='/clients'>Clients </Link>
                </li>
                <li className={`text-gray-600 font-bold ${pathname.includes('analysts') && 'text-green-500'}`}>
                    <Link to='/analysts'>Analysts </Link>
                </li>
                <li className={`text-gray-600 font-bold ${pathname.includes('') && 'text-green-500'}`}>
                    <Link to="/">Settings </Link>
                </li>
                <li className={`text-gray-600 font-bold ${pathname.includes('help') && 'text-green-500'}`}>
                    <Link to='/help'>Help </Link>
                </li>
            </ul>

            <div className="flex space-x-6 text-xl items-center">
                <button onClick={() => setOpenCloseSearch(false)} className="outline-none">
                    {openCloseSearch ? (
                        <LuSearch />
                    ) : (
                        <form>
                            <label htmlFor="search"> </label>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search"
                                className="rounded-lg bg-zinc-200 outline-none border-none focus:bg-white placeholder:text-base px-4 py-1 focus:outline-none focus:border-none"
                            />
                        </form>
                    )}
                </button>
                <FaRegBell />
                <TbUserSquareRounded />
            </div>
        </div>
    );
};

export default AdminHomeNavbar;
