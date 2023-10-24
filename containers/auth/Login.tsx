import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getLoginByEmail } from '@/api/auth/login';
import Input from '@/components/Shares/Input';
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
import Loading from '@/components/Loading';
import Link from 'next/link';
import { useAuth } from '@/context/authContext';



const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [loaddingSkeleton, setLoaddingSkeleton] = useState(false);
    const { login } = useAuth();
      
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmit(true);
      login(email, password);
      
    }
    
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row  md:px-28 md:py-8 bg-gradient-to-r from-blue-500 to-green-500 w-full h-screen">
        <div className="flex flex-1 bg-white w-full h-full p-10  md:rounded-lg">
          <div className="w-full hidden lg:flex lg:flex-1 lg:w-1/2 ">
            <img
              src="https://i.pinimg.com/564x/39/e6/d4/39e6d4c4f0572317e8a6c123e5d21015.jpg"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex-1 md:p-8 ">
            <div className="flex justify-end items-end md:mx-16">
              <h1 className="text-sm text-black/50 px-2">
                Already have an account?
              </h1>
              <button className="text-blue-500 bg-transparent px-5 outline-double outline-indigo-500 rounded-full">
                Register
              </button>
            </div>
            <form onSubmit={handleSubmit} className='md:mx-16'>
              <h2 className="text-5xl font-semibold ">Welcome to SM In !</h2>
              <h1 className="text-sm text-black/50">Login your account</h1>
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Email
                </label>
               
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    // isValidate={isSubmit && !isValidateEmail(email)}
                    // isShowTextError={isSubmit && !isValidateEmail(email)}
                    textError="Email is not valid"
                  />
                
              </div>

              <div className="mt-8">
                <label
                  htmlFor="password"
                  className="block text-gray-600 text-sm font-medium mb-2"
                >
                  Password
                </label>
                
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    isValidate={isSubmit && password === ''}
                    isShowTextError={isSubmit && password === ''}
                    textError="Password is not valid"
                  />
                
              </div>

              <button
                type="submit"
                className="bg-blue-500 w-full text-white px-20  py-2 mt-10 hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Login
              </button>
              {/* {
                error && <p className="text-red-500 text-sm mt-2">{error}</p>
              } */}
              <div className='flex justify-end py-3 text-sm text-blue-500'>
                <Link href='/forgot-password'>
                  Forgot password?
                </Link>
              </div>
            </form>
            <div className='w-full flex md:md:px-16 items-center'>
              <div className='flex-1 border-b-2 border-gray-300'></div>
              <div className='px-3 text-gray-500'>OR</div>
              <div className='flex-1 border-b-2 border-gray-300'></div>

            </div>
            <div className='flex justify-center items-center mt-5 w-full md:px-16'>
              <button className='flex items-center justify-center px-5 py-2 w-full border-2'>
                <img src='/images/google.svg' className='w-5 h-5 mr-2' />
                <span>Login with Google</span>
              </button>
            </div>
            
            {/* {loading && <Loading />} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
