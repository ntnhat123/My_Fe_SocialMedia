import React from 'react'
import { BsBookmarkFill } from 'react-icons/bs';
import { FaFacebookMessenger, FaGamepad, FaUserCog, FaUserFriends } from 'react-icons/fa'
import { FaClockRotateLeft } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdFlag } from 'react-icons/io';
import { FcEditImage } from "react-icons/fc";
import { TbDeviceTabletDown } from 'react-icons/tb';
import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/router'
type Props = {}

const ProfileLeft = (props: Props) => {
  const { user } = useAuth()
  const router = useRouter()
  return <>
    <div className='flex flex-col w-full h-full gap-y-3 cursor-pointer'>
        <div className='w-full flex justify-start items-center gap-2 py-2 hover:bg-gray-300 hover:rounded-lg' onClick={() => router.push(`/profile/${user?._id}`)}>
          <div className='flex items-center justify-center rounded-full overflow-hidden w-10 h-10 hover:rounded-full'>
            <img src={user?.avatar} alt="Profile" className="rounded-full group-hover:opacity-80" style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
          </div>
          <div className='font-bold'>
            <h1>{user?.fullName}</h1>
          </div>
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <FaUserFriends style={{ color: 'green' }} />
          Bạn bè
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <FaClockRotateLeft style={{ color: 'blue' }} />
          Kỷ niệm
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <FaFacebookMessenger style={{ color: 'purple' }} />
          Messenger
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <BsBookmarkFill style={{ color: 'red' }} />
          Đã lưu
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <HiUserGroup style={{ color: 'orange' }} />
          Nhóm
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <TbDeviceTabletDown style={{ color: 'pink' }} />
          Bảng feed
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <IoMdFlag style={{ color: 'brown' }} />
          Trang
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <FaGamepad style={{ color: 'teal' }} />
          Trò chơi
        </div>
        <div className='w-full py-2 flex items-center gap-2 hover:bg-gray-300 hover:rounded-lg'>
          <FcEditImage style={{ color: 'cyan' }} />
          Hoạt động quảng cáo gần đây
        </div>
    </div>
  </>
}

export default ProfileLeft