import React from 'react';
import Image from 'next/image';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Image
                  src="/assets/images/LoginPage/Background.png"
                  alt="Background Image"
                  fill
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 opacity-80"
        />

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 left-[60] shadow-lg w-96 px-[50px]">
        <h2 className="text-[6vh] font-bold text-white text-center mb-6 font-tektur tracking-wider">Login</h2>
        <form className="space-y-4 font-tektur">
          <div>
            <label htmlFor="email" className="text-sm text-white block mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>


          <div>
            <label htmlFor="password" className="text-sm text-white block mb-1">
              Pass:
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <div className='flex justify-center'>    
          <button
            type="submit"
            className=" py-2 px-10 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 transition"
          >
            Submit
          </button></div>
   
        </form>
        <div className="mt-4 text-center font-sourceCodePro">
          <p className="text-[2.1vh] text-gray-300">
            Don't have an account?{' '}
            <a href="#" className="text-purple-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="w-full h-px bg-gray-600"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="w-full h-px bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
