// import React from 'react'
import { IoClose } from "react-icons/io5";


const ClickSettings = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className='fixed inset-0 bg-black bg-opacity-70 z-10 flex items-center justify-center'>
            <div onClick={(e) => { e.stopPropagation(); }} className="relative bg-black border-[3px] border-gray-700 rounded-md w-[55%] h-[80%] flex flex-col justify-between">
                {/* Head */}
                <div className="flex flex-col gap-2 px-5 pt-5">
                    <div className="flex justify-between">
                        <h3 className="text-white">Pen Settings</h3>
                        <IoClose onClick={onClose} className="text-xl text-white bg-gray-900 w-8 rounded cursor-pointer" />
                    </div>
                    {/* Straight line horizontal */}
                    <div className="flex w-full">
                        <div className="border w-[90px] border-green-500"></div>
                        <div className="border w-full border-gray-700"></div>
                    </div>
                </div>

                {/* Body */}
                <div className="flex justify-between w-full h-full mt-3 text-white">
                    {/* Aside */}
                    <div className="w-4/12 h-full flex flex-col gap-3">
                        {/* upper aside */}
                        <div className="border-l border-l-green-500 w-full flex flex-col items-start">
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">HTML</button>
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">CSS</button>
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">JS</button>
                        </div>
                        {/* lower aside */}
                        <div className="border-l border-l-green-500 w-full flex flex-col">
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">Pen Details</button>
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">
                                Privacy
                                <span className="bg-yellow-300 px-1 ml-1 rounded text-xs text-black">PRO</span>
                            </button>
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">Behaviour</button>
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">Editor</button>
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">Template</button>
                            <button className="px-5 py-[.5px] w-11/12 text-start hover:bg-gray-700">
                                Screenshot
                                <span className="bg-yellow-300 px-1 ml-1 rounded text-xs text-black">PRO</span>
                            </button>
                        </div>
                    </div>

                    {/* body content : after aside buttons clicked */}
                    <div className="w-8/12 h-full flex flex-col overflow-y-scroll">
                    </div>
                </div>

                {/* Foot */}
                <div className="w-full bg-gray-900 flex justify-end p-3 ">
                    <button onClick={onClose} className="bg-green-500 hover:bg-green-700 hover:text-white px-5 py-2 rounded">Close</button>
                </div>
            </div>
        </div>
    )
}

export default ClickSettings