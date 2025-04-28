'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { isUserExist, signup } from '../(context)/auth';
const Page = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    if(name.length > 5 && email.length > 5 && name.length > 3){
      if(isUserExist({ email : email, password : password})){
        alert("User Exists!");
      }
      else{
        signup({name : name, email : email, password : password, isFirstTime : true});
        router.push('/login')
      }
    }
    else{
      alert("Please Enter details")
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Left Side - Welcome Back */}
        <div className="w-1/2 bg-gradient-to-r from-red-500 to-orange-400 text-white flex flex-col items-center justify-center p-12">
          <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
          <p className="text-center mb-8 text-lg">
            To keep connected with us please login<br />
            with your personal info
          </p>
          <Link href='/login' className="border border-white px-8 py-2 rounded-full font-semibold hover:bg-white hover:text-red-500 transition">
            SIGN IN
          </Link>
        </div>

        {/* Right Side - Create Account */}
        <div className="w-1/2 flex flex-col items-center justify-center p-12">
          <h1 className="text-4xl font-bold text-black mb-6">Create Account</h1>

          {/* Social Media Buttons */}
          <div className="flex space-x-6 mb-6">
            <button className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-black hover:bg-gray-200 transition" aria-label="Sign up with Facebook">
              f
            </button>
            <button className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-black hover:bg-gray-200 transition" aria-label="Sign up with Google">
              G+
            </button>
            <button className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-black hover:bg-gray-200 transition" aria-label="Sign up with LinkedIn">
              in
            </button>
          </div>

          <p className="text-gray-400 text-sm mb-6">or use your email for registration</p>

          {/* Form */}
          <form className="flex flex-col w-full max-w-xs space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              className="p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              SIGN UP
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Page;
