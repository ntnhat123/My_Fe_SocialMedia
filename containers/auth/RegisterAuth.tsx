import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { getRegisterByEmail } from '@/api/auth/register';   
import Input from '@/components/Shares/Input';
import Loading from '@/components/Loading';
import { useAuth } from '@/context/authContext';
import { IUser } from '@/model/user';
type Props = {}

const RegisterAuth = (props: Props) => {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
   const { register } = useAuth();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmit(true);
        setLoading(true);
        register(fullName,email,password,gender)    
        setLoading(false);
    }

  return (
    <div className="flex flex-col-reverse lg:flex-row md:px-28 md:py-8 bg-gradient-to-r from-blue-500 to-green-500 w-full h-screen">
        <div className='flex flex-1 bg-white w-full h-full md:rounded-lg'>
            <div className=' w-full hidden lg:flex lg:flex-1 lg:w-1/2 '>
                <img 
                    src='https://i.pinimg.com/564x/39/e6/d4/39e6d4c4f0572317e8a6c123e5d21015.jpg'
                    className='object-cover w-full h-full rounded-lg'
                />
            </div>
            <div className="flex-1 p-8">
            <form onSubmit={handleSubmit}>
                <div className='flex justify-end items-end '>
                    <h1 className='text-sm text-black/50 px-2'>
                        Already have an account? 
                    </h1>
                    <button className='text-blue-500 bg-transparent px-5 outline-double outline-indigo-500 rounded-full'>Login</button>
                </div>
                <h2 className="text-5xl font-semibold ">Welcome to SM In !</h2>
                <h1 className='text-sm text-black/50'>Register your account</h1>
                <div className='mt-8 flex justify-between gap-2'>
                    
                    <div className='flex flex-col flex-1 '>
                        <label htmlFor="fullName" className="block text-gray-600 text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <Input 
                            type='text'
                            placeholder='Full Name'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>    
                </div>
                <div>

                </div>
                <div className='mt-8'>
                    <label htmlFor="avatar" className="block text-gray-600 text-sm font-medium mb-2">
                        Avatar
                    </label>
                    <input type="file" 
                        id="avatar" name="avatar" accept="image/png, image/jpeg"

                        className="w-full p-2 border border-gray-300 rounded outline-purple-500"

                    />
                </div>
                <div className='mt-8'>
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                        Email 
                    </label>
                    <Input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className="w-full p-2 border border-gray-300 rounded outline-purple-500"
                    />
                </div>

                <div className="mt-8">
                    <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                    Password
                    </label>
                    <Input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        isValidate={isSubmit && password.length < 6 && password.length > 0}
                        isShowTextError={isSubmit && password.length < 6 && password.length > 0}
                        placeholder='Password'
                        />
                </div>

                <button
                    type="submit"

                    className="bg-blue-500 text-white px-20  py-2 mt-10  rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Register
                </button>
            </form>
            {
                loading && <Loading />
            }
        </div>

        </div>

    
    </div>
  )
}

export default RegisterAuth