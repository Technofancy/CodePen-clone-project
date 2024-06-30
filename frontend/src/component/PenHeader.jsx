import Signup from '../container/Signup';

import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaCodepen } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { MdViewSidebar } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import 'animate.css';

//onclick
import Holdup from "./Holdup";

const PenHeader = () => {
    // To click save button
    const [isHoldupOpen, setIsHoldupOpen] = useState(false);

    // To Change View
    const [changeView, setChangeView] = useState(false);

    return (
        <>
            <header className="py-2 px-3 bg-black border-gray-500 border-b-[1px] flex justify-between items-center w-full">
                <div className="flex gap-3 items-center text-white">
                    <Link to={"/home"}>
                        <FaCodepen className="text-4xl" />
                    </Link>
                    <div className="flex flex-col">
                        <p className="flex gap-1 items-center">
                            <span className="font-bold text-xl"> Untitled </span>
                            <BsPencilFill className="cursor-pointer animate_animated animate__headShake" />
                        </p>

                        <p className="text-gray-400 text-sm">
                            Captain Anonymous
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 text-white text-sm">

                    {/* Button to Save */}
                    <Link onClick={() => { setIsHoldupOpen(true) }} className="bg-gray-600 px-5 py-3 rounded-md flex items-center justify-center gap-1">
                        <FaCloud />
                        <span>
                            Save
                        </span>
                    </Link>

                    {/* Button for settings */}
                    <Link className="bg-gray-600 px-3 rounded-md flex items-center justify-center gap-1" title='Settings'>
                        <IoMdSettings />
                        <span>Settings</span>
                    </Link>

                    {/* Button for Chnage View */}
                    <Link onClick={() => { setChangeView(!changeView) }} className="bg-gray-600 px-3 rounded-md flex items-center justify-center" title='Change View'>
                        <MdViewSidebar className="-rotate-90 text-xl" />
                    </Link>

                    {/* Button for Signup */}
                    <Link to={"/signup"} className="bg-green-500 px-5 rounded-md flex items-center justify-center hover:bg-green-900">
                        Sign Up
                    </Link>

                    {/* Button for Login */}
                    <Link className="bg-gray-600 hover:bg-gray-500 px-5 rounded-md flex items-center justify-center">
                        Log In
                    </Link>

                </div>
            </header>

            {/* After clicking "Save" : Pop-up "Holdup" page to login/signup. */}
            <Holdup isOpen={isHoldupOpen} onClose={() => { setIsHoldupOpen(false) }} />

            {/* After clicking "Settings" */}

            {/* After clicking "Change View" */}
            {changeView && <div className='fixed top-14 right-48 z-50 border-2 border-black bg-gray-600 rounded-xl h-fill w-64'>
                <div className='flex flex-col px-2'>
                    <p className='text-lg text-white font-bold py-3'>Change View</p>
                    <div className='flex h-10 w-full rounded border-2 border-gray-400 mb-3'>
                        <div className='hover:bg-gray-300 h-full w-1/3 flex items-center justify-center'>
                            <MdViewSidebar className="rotate-180 text-2xl text-white" />
                        </div>
                        <div className='bg-gray-400 h-full w-1/3 flex items-center justify-center'>
                            <MdViewSidebar className="-rotate-90 text-2xl text-white" />
                        </div>
                        <div className='hover:bg-gray-300 h-full w-1/3 flex items-center justify-center'>
                            <MdViewSidebar className="text-2xl text-white" />
                        </div>

                    </div>
                </div>
            </div>}

        </>
    )
}

export default PenHeader;