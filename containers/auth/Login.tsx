import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getLoginByEmail } from '@/api/auth/login';
import Input from '@/components/Shares/Input';
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
import Loading from '@/components/Loading';
import Link from 'next/link';
import { useAuth } from '@/context/authContext';
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { toast } from "react-toastify";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState('');
    const [loaddingSkeleton, setLoaddingSkeleton] = useState(false);
    const { login } = useAuth();
      
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmit(true);
      login(email,password);
    }
    
    return (
      <>
        <div className="flex flex-col lg:flex-row lg:p-16 p-3 items-center justify-center h-screen ">
          <div className="lg:w-1/2 h-full lg:flex hidden items-center rounded-bl-xl rounded-tl-xl  overflow-hidden">
            <img src="/images/undraw_Social_influencer_re_beim.png" alt="Social Influencer" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-1/2 h-full bg-gray-100 lg:p-28 p-12 py-40 w-full rounded-br-xl rounded-tr-xl overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 text-center">
              <h1 className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500 animate-gradient">Login Account</h1>
              <div className="flex items-center border-b-2 border-blue-500 mb-4">
                <span className="mr-2">
                  <MdOutlineEmail />
                </span>
                <input type="email" onChange={(e) => setEmail(e.target.value)} id="username" name="username" placeholder='Email' className="p-2 border-none focus:outline-none w-full bg-transparent" />
              </div>

              <div className="flex items-center border-b-2 border-blue-500 mb-4">
                <span className="mr-2">
                  <CiLock  />
                </span>
                <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder='Password' className="p-2 bg-transparent border-none focus:outline-none w-full" />
              </div>

              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Login</button>
            </form>
            <div>
              <p className="text-center mt-4">Don't have an account? <a className="text-blue-500 cursor-pointer" onClick={() => router.push('/register')} >Register</a></p>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex-1 border-b-2 border-gray-300"></div>
              <div className="px-3 text-gray-500">Or</div>
              <div className="flex-1 border-b-2 border-gray-300"></div>
            </div>
            <div className="flex justify-center items-center mt-5 w-full">
              <button className="flex items-center justify-center px-5 py-2 w-full border-2">
                <img src="/images/google.svg" className="w-5 h-5 mr-2" />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;
