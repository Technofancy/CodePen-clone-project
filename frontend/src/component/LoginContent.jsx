import { useState } from 'react';
import logo from '../assets/images/codepen_logo.png';
import { Link } from 'react-router-dom';
import { GrGoogle, GrGithub } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";

const LoginContent = () => {
  const [arwClicked, setArwClicked] = useState(true);
  const [isForgotPasswordExpand, setIsForgotPasswordExpand] = useState(false);

  // Event handler for arrow click
  const handleArrowClick = () => {
    setArwClicked(!arwClicked);
  };

  const expandForgotPassword = (e) => {
    e.preventDefault();
    setIsForgotPasswordExpand(!isForgotPasswordExpand);
  };

  const getOrSectionHeight = () => {
    if (isForgotPasswordExpand) {
      return 'h-[210px]';
    } else if (!arwClicked) {
      return 'h-[143px]';
    } else {
      return 'h-[130px]';
    }
  };

  const getOrSectionPadding = () => {
    if (isForgotPasswordExpand) {
      return 'px-4 py-10 -ml-7';
    } else if (!arwClicked) {
      return 'px-2 py-4 -ml-5';
    } else {
      return 'px-2 py-3 -ml-5';
    }
  };

  return (
    <>
      {/* Main content */}
      <div className="mt-20 mb-14 w-[70%] h-full mx-auto">

        <div className={`flex justify-between w-full relative transition-all duration-500`}>

          {/* left/upper part */}
          <div className='flex flex-col w-1/2'>
            <img src={logo} alt="codepen_logo" className='w-40' />
            <h1 className='text-white text-6xl font-bold my-1'>Log In</h1>
            {/* Login with ... (options) */}
            <div className='my-3 flex flex-col w-fit'>
              {/* with google */}
              <Link className="flex mx-auto w-full gap-3 p-3 pr-[69px] mt-3 items-center rounded-md text-md bg-gray-800 border-2 border-transparent hover:bg-black hover:border-gray-700">
                <GrGoogle className="text-red-500 text-2xl" />
                <p className="text-white">Log In with Google</p>
              </Link>

              {/* with github */}
              <Link className="flex mx-auto w-full gap-3 p-3 mt-3 items-center rounded-md text-md bg-gray-800 border-2 border-transparent hover:bg-black hover:border-gray-700">
                <GrGithub className="text-white text-2xl" />
                <p className="text-white">Log In with GitHub</p>
              </Link>

              {/* with facebook */}
              <Link className="flex mx-auto w-full gap-3 p-3 mt-3 items-center rounded-md text-md bg-gray-800 border-2 border-transparent hover:bg-black hover:border-gray-700">
                <FaFacebook className="text-blue-800 text-2xl" />
                <p className="text-white">Log In with Facebook</p>
              </Link>
            </div>

            <div className="w-full">
              {
                arwClicked ? (
                  <div className='flex items-center text-white'>
                    <MdArrowRight className='text-4xl cursor-pointer' onClick={handleArrowClick} />
                    <p className='-ml-1'>How social log in works</p>
                  </div>
                ) : (
                  <div className='flex flex-col text-white w-full mx-auto bg-gray-900 rounded transition-all duration-500'>
                    <div className='flex items-center'>
                      <MdArrowDropDown className='text-4xl cursor-pointer' onClick={handleArrowClick} />
                      <p className='-ml-1'>How social log in works</p>
                    </div>
                    <div className='px-3 py-3 pl-8 pt-0 text-xs'>
                      <p>If the email address associated with your social account matches the email address of your CodePen account, you&apos;ll be logged in. You aren&apos;t locked to any particular social account. Questions?</p>
                      <Link className='text-blue-500 hover:text-white'>Contact Support.</Link>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

          {/* -----OR----- */}
          <div>
            <div className='text-white flex flex-col absolute left-[333px] top-[123px] transition-all duration-500'>
              <div className={`border w-0 ${getOrSectionHeight()} border-white transition-all duration-500`}></div>
              <p className={`border rounded-xl ${getOrSectionPadding()} transition-all duration-500`}>OR</p>
              <div className={`border w-0 ${getOrSectionHeight()} border-white transition-all duration-500`}></div>
            </div>
          </div>

          {/* Right/below part : form manual input */}
          <div className='text-white w-full h-full'>
            <form className='px-36 pr-5'>
              <div className={`pt-20 mt-3 h-full transition-all duration-500 ${isForgotPasswordExpand ? 'min-h-[500px]' : ''}`}>
                <div className='mt-3 mr-3'>
                  <div className="mb-5">
                    <label className="block text-sm mb-1" htmlFor="username">
                      Username or Email
                    </label>
                    <input className="border rounded w-full py-3 px-3 bg-slate-200" id="username" type="text" title='Please fill out this field.' />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm mb-2" htmlFor="password">
                      Password
                    </label>
                    <input className="border rounded w-full py-3 px-3 mb-3 bg-slate-200" id="password" type="password" title='Please fill out this field.' />
                  </div>
                  <div className="mb-5">
                    <button className="bg-green-500 hover:bg-green-700 hover:text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                      Log In
                    </button>
                  </div>
                </div>

                {/* after forgot password */}
                <div className='flex flex-col items-center justify-center mr-3 text-sm'>
                  <button className='text-blue-500 font-thin' onClick={expandForgotPassword}>Forgot Password?</button>

                  {/* after forget password clicked */}
                  {isForgotPasswordExpand && (
                    <div className='flex flex-col items-start rounded-md bg-gray-900 opacity-85 w-full mt-3 mb-3 p-4 transition-all duration-500'>
                      <p className='text-white text-xl font-semibold'>Reset Your Password</p>
                      <div className="mt-3 mb-6 w-full">
                        <label className="block text-slate-600 text-sm mb-1" htmlFor="username-reset">
                          Username Or Email
                        </label>
                        <input className="border rounded w-full py-3 px-3 bg-slate-100" id="username-reset" type="text" placeholder='your@email.com' title='Please fill out this field.' />
                      </div>
                      <div className="mb-5 w-full">
                        <button className="bg-slate-700 hover:bg-slate-500 text-white text-lg py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                          Send Password Reset Email
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* need an account? */}
      <div className="flex my-5 gap-1 items-center justify-center text-white">
        <p className=''>Need an account?</p>
        <Link to={"/signup"} className="text-blue-500 hover:text-white">Sign up now!</Link>
      </div>
    </>
  );
}

export default LoginContent;
