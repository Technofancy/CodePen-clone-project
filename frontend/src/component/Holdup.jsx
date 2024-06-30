import React from 'react'
import { IoClose } from "react-icons/io5";

const Holdup = ({ isOpen, onClose }) => {
  const r = React;
  if (!isOpen) return null;

  const [isForgotPasswordExpand, setIsForgotPasswordExpand] = r.useState(false);

  const expandForgotPassword = (e) => {
    e.preventDefault();
    setIsForgotPasswordExpand(!isForgotPasswordExpand);
  };

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
        <div onClick={ (e) => {e.stopPropagation(); }} className="bg-white rounded shadow-lg relative w-5/12 h-full mt-10 border-t-green-500 border-t-[7px]">
          <button onClick={onClose} className="absolute top-2 right-3 text-gray-400 text-3xl font-bold">
            <IoClose />
          </button>

          <div>
            <div className='flex flex-col items-center px-7 pt-7'>
              <h2 className="text-3xl font-bold mb-2">Hold up!</h2>
              <p className='text-slate-500'>You’ll have to Log In or Sign Up (for free!) to save your Pen.</p>
              <p className='text-slate-500'>Don’t worry! All your work will be saved to your account.</p>
            </div>
            <form className='px-16'>
              <div className='pt-20 mt-5 overflow-y-auto max-h-96'>

                <div className='mt-3 mr-3'>
                  <div className="mb-5">
                    <label className="block text-sm mb-1" htmlFor="username">
                      Username or Email
                    </label>
                    <input className="border rounded w-full py-3 px-3 bg-slate-200" id="username" type="text" title='Please fill out this feild.' />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm mb-2" htmlFor="password">
                      Password
                    </label>
                    <input className=" border rounded w-full py-3 px-3 mb-3 bg-slate-200" id="password" type="password" title='Please fill out this feild.' />
                  </div>
                  <div className="mb-5">
                    <button className="bg-green-500 hover:bg-green-700 hover:text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                      Log In
                    </button>
                  </div>
                </div>

                {/* after forgot password */}
                <div className='flex flex-col items-center justify-center mr-3 mb-3 text-sm'>

                  <button className='text-blue-800 font-thin' onClick={expandForgotPassword}>Forgot Password?</button>

                  {/* after forget password clicked */}
                  {isForgotPasswordExpand && (
                    <div className='flex flex-col items-start rounded-md bg-black opacity-85 w-full mt-5 mb-2 p-4'>
                      <p className='text-white text-xl font-semibold'>Reset Your Password</p>

                      <div className="my-5 w-full">
                        <label className="block text-slate-600 text-sm mb-1" htmlFor="username">
                          Username Or Email
                        </label>
                        <input className="border rounded w-full py-3 px-3 bg-slate-100" id="username" type="text" placeholder='your@email.com' title='Please fill out this feild.' />
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

            <hr className='mt-1' />

            <div className='flex gap-1 items-center text-sm justify-center mt-3'>
              <p>Need to Create an account?</p>
              <button className='text-blue-800'>Sign Up for CodePen</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Holdup;