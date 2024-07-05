// Frontend files
import logo from "../assets/images/codepen_logo.png"
import LoginContent from "../component/LoginContent"
import Footer from "../component/Footer";
// React icons
import { RiMenuUnfoldLine, RiMenuUnfold2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
// Dependencies
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const [sideMenu, setSideMenu] = useState(false);

    useEffect(() => {

        axios
            .get('http://locolhost:8000/users')
            .then()
            .catch()
    }, [])

    return (
        <div>
            <div className="w-screen h-full flex items-start justify-start overflow-hidden">

                {/* Sliding vertical side menu bar at left-side */}
                <div className={`${sideMenu ? "w-2" : "flex-[0.15] xl:flex-[0.15]"} min-h-screen h-full relative bg-slate-900 flex flex-col items-center justify-start gap-4 transition-all duration-300 ease-in-out group`}>

                    {/* Slider Link */}
                    <div
                        onClick={() => setSideMenu(!sideMenu)}
                        className='w-7 h-7 rounded-tr-md rounded-br-md flex items-center justify-center text-white bg-slate-600 absolute -right-7 mt-6 cursor-pointer'>
                        {sideMenu ? <RiMenuUnfoldLine /> : <RiMenuUnfold2Line />}
                    </div>

                    <div className='overflow-hidden w-full flex flex-col gap-4'>

                        {/* logo */}
                        <Link to={"/home"} className='px-3 pt-4 mb-3'>
                            <img src={logo} alt="codepen logo" className='object-contain w-full h-auto' />
                        </Link>

                        <p className='uppercase text-gray-400 text-xs mx-auto px-3'>try our online editor</p>

                        {/* start code -> newproject = pen */}
                        <Link to={"/pen"} className='px-3 py-'>
                            <div className='px-3 py-4 flex items-center justify-center rounded-md border-2 border-green-500 bg-black text-white'>
                                <p className='text-center'>Start Coding</p>
                            </div>
                        </Link>

                        {/* search pens, challenges, spark */}
                        <div className='text-white text-lg mt-2 flex flex-col gap-2'>
                            <Link className='hover:bg-slate-800 px-3'>
                                <p className=''>Search Pens</p>
                            </Link>
                            <Link className='hover:bg-slate-800 px-3'>
                                <p className=''>Challenges</p>
                            </Link>
                            <Link className='hover:bg-slate-800 px-3'>
                                <p className=''>Spark</p>
                            </Link>
                        </div>

                        {/* codepen pro */}
                        <Link className='mt-4 px-3 hover:bg-slate-800'>
                            <p className='text-white text-lg flex items-center justify-start gap-2'>
                                CodePen
                                <span className='text-black font-bold text-[11px] bg-yellow-400 px-1 h-4 rounded-sm flex justify-center items-center'>PRO</span>
                            </p>
                        </Link>

                    </div>

                </div>

                {/* Right side / Remaining body */}
                <div className='flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start'>
                    {/* Top horizontal bar */}
                    <div className='py-4 px-3 bg-black flex justify-between items-center w-full'>
                        {/* Searchbar */}
                        <div className="w-[30%] bg-slate-800 px-3 py-2 rounded-md flex items-center justify-center">
                            <FaSearch className="text-lg text-gray-400" />
                            <input
                                type="text"
                                className="flex-1 px-4 py-1 text-md bg-transparent outline-none border-none palceholder:text-gray-600" placeholder="Search CodePen..." />
                        </div>

                        {/* Signing buttons or profile  */}
                        <div className='flex gap-3'>
                            <Link to={"/signup"} className="text-black bg-green-500 px-4 py-2 rounded-md hover:text-white hover:bg-green-900">
                                Sign Up
                            </Link>
                            {/* <Link to={"/login"} className="text-white bg-gray-600 px-5 py-2 rounded-md hover:bg-slate-500">
                                Log In
                            </Link> */}
                        </div>
                    </div>

                    {/* Main body and Feeder */}
                    <div className="w-full bg-black opacity-90">
                        <LoginContent />
                    </div>

                    {/* Footer */}
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Signup;