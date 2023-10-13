// components/SignoutDropdown.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignoutDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSignout = () => {
    // Implement your signout logic here
    // You can use a library like Firebase, Auth0, or your own authentication system
    localStorage.removeItem('isAuthenticated');
    router.push('/login')

  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
      >
        <img
          className="mx-auto h-6 w-auto"
          src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
          alt="Your Company"
        />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => router.push('/user')}
              className="flex items-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              User Profile
            </button>
          </div>
          <div className="py-1">
            <button
              onClick={handleSignout}
              className="flex items-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignoutDropdown;
