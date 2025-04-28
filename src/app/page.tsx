'use client';

import { useEffect } from 'react';
import BirthdayPage from "./(birthday)/BirthdayCard";
import { useRouter } from 'next/navigation'; // <-- corrected here
import { isAuthenticated, isFirstTimeLogin } from './(context)/auth';

const Page = () => {
  const router = useRouter();
  
  useEffect(() => {
    console.log(isAuthenticated());
    console.log(isFirstTimeLogin())
    if (!isAuthenticated()) {  // <-- also assuming isAuthenticated is a function
      router.push('/login');
    }
  }, [router]);
  
  return (
    <div>
    {isFirstTimeLogin() ? <BirthdayPage /> : <h1> Welcome Back </h1>}
    </div>
  );
}

export default Page;
