import React, { useEffect } from 'react'
import Content from '../../components/MainContent/Content'
import ProfileLeft from '../../components/Leftprofile/ProfileLeft'
import RightFriend from '../../components/Right/RightFriend'
import Sidebar from '@/components/Sidebar/Sidebar'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/authContext'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { getPostRequest } from '@/redux/post/actions'

const Homecontainers = () => {
  const router = useRouter()
  const { user } = useAuth()
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(!user){
      router.push('/login')
    }
  },[user])

  useEffect(() => {
    dispatch(getPostRequest())    
  },[dispatch])
  
  return <>
      <div className='h-full w-full md:py-3 md:px-5 bg-gray-200 overflow-y-auto no-scrollbar scrollbar-hidden'>
        <Sidebar/>
        <div className='flex flex-col lg:flex-row mt-5'>
          <div className='hidden md:flex flex-1 lg:w-1/3 w-full px-8 '>
            {/* <ProfileLeft/> */}
          </div>
          <div className='flex flex-2 lg:w-1/3 w-full lg:overflow-y-auto lg:no-scrollbar lg:scrollbar-hidden'>
            <Content  />
          </div>
          <div className='hidden md:flex flex-1 lg:w-1/3 w-full lg:flex-col px-5'>
            {/* <RightFriend /> */}
          </div>
        </div>


      </div>
  </>
}
export default Homecontainers