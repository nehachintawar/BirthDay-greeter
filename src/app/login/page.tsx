'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { login, isUserExist, isAuthenticated } from '../(context)/auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  useEffect(()=>{
    if(isAuthenticated()){
      router.push('/')
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length > 5 && password.length > 5) {
      if(isUserExist({email : email, password : password})){
        console.log("logged in")
        login();
        router.push('/')
      }
      else{
        alert("User Does not registered!")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Left Side - Sign In */}
        <div className="w-1/2 flex flex-col justify-center items-center p-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign in</h1>

          {/* Social Media Buttons */}
          <div className="flex space-x-4 mb-4">
            <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
              f
            </button>
            <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
              G+
            </button>
            <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition">
              in
            </button>
          </div>

          <p className="text-gray-400 text-sm mb-6">or use your account</p>

          {/* Form */}
          <form className="flex flex-col w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              onChange={(e) => setPassword(e.target.value)}
            />

            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 text-center">
              Forgot your password?
            </a>

            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              SIGN IN
            </button>
          </form>
        </div>

        {/* Right Side - Sign Up Invitation */}
        <div className="w-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
          <p className="mb-8 text-center">
            Enter your personal details and start <br /> journey with us
          </p>
          <Link href='/signup' className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-red-500 transition font-semibold">
            SIGN UP
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Page;
