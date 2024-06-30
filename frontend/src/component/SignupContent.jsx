import { Link } from "react-router-dom";
// import React from 'react'
import { GrGoogle, GrGithub } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaMinusCircle, FaCheckSquare } from "react-icons/fa";

const SignupContent = () => {
    return (
        <>
            <div className="mt-16 w-[65%] mx-auto bg-gray-600">
                <div className='flex flex-col'>
                    {/* heading */}
                    <div className="h-[200px] flex flex-col gap-4 items-center justify-center text-white">
                        <h1 className="capitalize font-extrabold text-5xl">Free</h1>
                        <h2 className="capitalize text-md">Welcome to CodePen.</h2>
                    </div>

                    {/* Contents */}
                    <div className="flex justify-between">
                        {/* First/Left Part : forms */}
                        <div className="bg-white md:w-[69.3%] flex flex-col p-4">
                            {/* with google */}
                            <Link className="flex mx-auto w-full gap-3 p-2 mt-3 items-center rounded-md text-md bg-gray-800 border-2 border-transparent hover:bg-black hover:border-gray-700">
                                <GrGoogle className="text-red-500 text-2xl" />
                                <p className="text-white">Sign Up with Google</p>
                            </Link>

                            {/* with github */}
                            <Link className="flex mx-auto w-full gap-3 p-2 mt-3 items-center rounded-md text-md bg-gray-800 border-2 border-transparent hover:bg-black hover:border-gray-700">
                                <GrGithub className="text-white text-2xl" />
                                <p className="text-white">Sign Up with GitHub</p>
                            </Link>

                            {/* with facebook */}
                            <Link className="flex mx-auto w-full gap-3 p-2 mt-3 items-center rounded-md text-md bg-gray-800 border-2 border-transparent hover:bg-black hover:border-gray-700">
                                <FaFacebook className="text-blue-800 text-2xl" />
                                <p className="text-white">Sign Up with Facebook</p>
                            </Link>

                            {/* or */}
                            <p className="py-3 text-gray-600">Or,</p>

                            {/* with manual email */}
                            <Link className="flex w-fit px-3 py-2 items-center rounded-md text-md bg-gray-800 border-2 border-transparent hover:bg-gray-700">
                                <p className="text-white">Sign Up with Email</p>
                            </Link>

                            <div className="mt-3">
                                {/* <UserAuthInput /> */}
                            </div>

                            <p className="p-3 gap-1">
                                <span>By signing up, you agree to CodePen&apos;s </span>
                                <a href="https://blog.codepen.io/documentation/terms-of-service/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Terms of Service</a>,
                                <a href="https://blog.codepen.io/documentation/code-conduct/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Code of Conduct</a>,
                                <span> and </span>
                                <a href="https://blog.codepen.io/documentation/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Privacy Policy</a>.
                            </p>


                        </div>

                        {/* Second/Right Part : features */}
                        <div className="bg-gray-700 flex flex-col md:w-[29.2%] p-6">
                            <div className="pb-3 text-sm">
                                <h3 className="text-bold text-lg text-white uppercase">Free</h3>
                                <hr className="border border-gray-400 mb-2" />
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Deploys</span>
                                    <span>0</span>
                                </p>
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Custom Domains</span>
                                    <span>0</span>
                                </p>
                            </div>

                            <div className="pb-3 text-sm">
                                <h3 className="text-bold text-lg text-white uppercase">pen & project views</h3>
                                <hr className="border border-gray-400 mb-2" />
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Editor View</span>
                                    <span className="text-green-500"><FaCheckSquare /></span>
                                </p>
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Full View</span>
                                    <span className="text-green-500"><FaCheckSquare /></span>
                                </p>
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Details View</span>
                                    <span className="text-green-500"><FaCheckSquare /></span>
                                </p>
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Shareable Debug View</span>
                                    <span className="text-red-500"><FaMinusCircle /></span>
                                </p>
                            </div>

                            <div className="pb-3 text-sm">
                                <h3 className="text-bold text-lg text-white uppercase">Pen features</h3>
                                <hr className="border border-gray-400 mb-2" />
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Collab Mode</span>
                                    <span className="text-red-500"><FaMinusCircle /></span>
                                </p>
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Professor Mode</span>
                                    <span className="text-red-500"><FaMinusCircle /></span>
                                </p>
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Presentation View</span>
                                    <span className="text-red-500"><FaMinusCircle /></span>
                                </p>
                            </div>

                            <div className="pb-3 test-sm">
                                <h3 className="text-bold text-lg text-white uppercase">Asset Hosting</h3>
                                <hr className="border border-gray-400 mb-2" />
                                <p className="flex justify-between items-center text-gray-400">
                                    <span>Storage</span>
                                    <span className="text-red-500"><FaMinusCircle /></span>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-bold text-lg text-white uppercase">Need More?</h3>
                                <hr className="border border-gray-400 mb-2" />
                                <div className="w-full h-fill bg-yellow-200 rounded-md">
                                    <p className="px-8 py-2 text-center">
                                        <span>Unlock the full power of CodePen </span>
                                        <Link
                                            to={"./home/auth/proPlans"}
                                            className="text-blue-700 underline hover:text-blue-500 hover:no-underline"
                                        >
                                            with our PRO plans.
                                        </Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex text-blue-400 justify-center items-center my-6">
                <Link className="hover:text-white">
                    Terms of Services
                </Link>

                <span className="mb-2 mx-1 text-xl text-white">.</span>

                <Link className="hover:text-white">
                    Privacy Policy
                </Link>

                <span className="mb-2 mx-1 text-xl text-white">.</span>

                <Link className="hover:text-white">
                    Code of Conduct
                </Link>
            </div>
        </>
    )
}

export default SignupContent