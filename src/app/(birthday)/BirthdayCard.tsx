'use client';

import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">

        {/* Top banners */}
        <div className="absolute top-0 left-0 right-0 flex justify-between px-4 py-2">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-red-400 rounded-full"></div>
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Party banners */}
        <div className="absolute top-0 left-0 right-0 flex justify-center mt-6">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-blue-500 clip-triangle"></div>
            <div className="w-8 h-8 bg-green-500 clip-triangle"></div>
            <div className="w-8 h-8 bg-orange-400 clip-triangle"></div>
            <div className="w-8 h-8 bg-red-500 clip-triangle"></div>
            <div className="w-8 h-8 bg-blue-500 clip-triangle"></div>
          </div>
        </div>

        {/* Text content */}
        <div className="mt-16">
          <p className="text-gray-600">Hey</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Katie,</h2>
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Happy Birthday</h1>
          <p className="text-blue-700 mb-6">May all your wishes come true</p>
          <p className="text-gray-600">from Neha</p>
        </div>

        {/* Bottom decorations */}
        <div className="absolute bottom-0 left-0 p-4">
          <img src="/party-popper.png" alt="Party Popper" className="w-12 h-12" />
        </div>

        <div className="absolute bottom-0 right-0 p-4">
          <img src="/party-popper.png" alt="Party Popper" className="w-12 h-12" />
        </div>

        <div className="mt-8">
          <img src="/birthday-cake.png" alt="Birthday Cake" className="mx-auto w-32" />
        </div>

      </div>
    </div>
  );
};

export default Page;
