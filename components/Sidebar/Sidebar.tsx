import React, { useEffect,useState } from 'react'
import { BiSearch,BiHomeAlt } from 'react-icons/bi'
import { AiOutlineMessage,AiOutlineCompass } from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineLogout} from 'react-icons/hi'
import { IUser } from '@/model/user'
import { getUserByIds } from '@/api/user/user'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/authContext'

const Sidebar = () => {

  const [user, setUser] = useState<IUser>({} as IUser)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const getUserByIdd = async () => {
    try{
      const res = await getUserByIds(router.query.id as string)
      setUser(res.data.data)
      console.log(res)
      setLoading(true)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getUserByIdd()
  }, [router.query.id])
  return <>
    <div className=' flex items-center justify-between h-full w-full py-5 px-8 bg-white'>
            <div className="flex items-center ">
                <h1 className='text-green-500 text-3xl font-semibold'>SM <span >in</span></h1>
            </div>
            <div className="flex items-center relative rounded-3xl bg-gray-200">
              <BiSearch className="absolute left-0 top-0 mt-2 ml-2 text-black/30" />
              <input type="text" placeholder='Search' className='rounded-3xl px-3 py-1 pl-8 outline-none bg-black/10' /> 
            </div>
            <div className='flex items-center '>
              <div className='hover:bg-gray-400 hover:rounded-xl'>
                <BiHomeAlt className='text-2xl text-slate-400 m-2 hover:text-white' />
              </div>
              <div className='ml-5 hover:bg-gray-400 hover:rounded-xl'>
                <IoMdNotificationsOutline className='text-2xl text-slate-400 m-2 hover:text-white' />
              </div>
              <div className='ml-5 hover:bg-gray-400 hover:rounded-xl'>
                <AiOutlineMessage className='text-2xl text-slate-400 m-2 hover:text-white' />
              </div>
              <div className='ml-5 hover:bg-gray-400 hover:rounded-xl'>
                <AiOutlineCompass className='text-2xl text-slate-400 m-2 hover:text-white' />
              </div>
              <div className='ml-5 hover:bg-gray-400 hover:rounded-xl'>
                <FiSettings className='text-2xl text-slate-400 m-2 hover:text-white' />
              </div>
            </div>
            <div className='flex items-center'>
              <div className='relative group flex'>
                <p className="p-2 group-hover:opacity-80">{user.fullName}</p>
                <div className='flex items-center justify-center rounded-full bg-gray-400 w-10 h-10 hover:rounded-full'>
                  <img
                    src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/361606265_3446022385728396_458335017174884602_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mNTeqb676rQAX-L0o-q&_nc_ht=scontent.fdad1-4.fna&oh=00_AfA27Ib7d1Lbqj-k75F7ZekKrnwN3ApZjCTfT5EJuMDGTw&oe=651E4190"
                    alt="Profile"
                    className='rounded-full group-hover:opacity-80'
                  />
                </div>
                {/* <div className='absolute top-16 right-0 w-48 bg-white rounded-xl shadow-xl'>
                  <ul className='flex flex-col  '>
                    <li className='hover:bg-gray-200 p-2 rounded-xl flex justify-between'>Logout<span className='my-1'><HiOutlineLogout/></span></li> 
                  </ul>
                </div>   */}
              </div>
              
            </div>

        </div>
  </>
}

export default Sidebar