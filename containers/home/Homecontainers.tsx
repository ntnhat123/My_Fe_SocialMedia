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
      <div className='h-full w-full md:py-3 md:px-5 bg-gray-200'>
        <Sidebar/>
        <div className='flex mt-5'>
          <div className='flex flex-1 w-full px-8 '>
            {/* <ProfileLeft/> */}
          </div>
          <div className='flex flex-1 w-full overflow-auto no-scrollbar'>
            <Content  />
          </div>
          <div className='flex flex-1 flex-col  px-5'>
              {/* <RightFriend /> */}
          </div>
        </div>
      </div>
  </>
}
export default Homecontainers