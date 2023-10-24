import React from 'react'
import { FaUserCog } from 'react-icons/fa'
type Props = {}

const ProfileLeft = (props: Props) => {
  return <>
    <div className='flex flex-col w-full h-full '>

        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            
            <div>
                <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/361606265_3446022385728396_458335017174884602_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mNTeqb676rQAX-L0o-q&_nc_ht=scontent.fdad1-4.fna&oh=00_AfA27Ib7d1Lbqj-k75F7ZekKrnwN3ApZjCTfT5EJuMDGTw&oe=651E4190"
                alt="Cover"
                className="w-full h-32 object-cover object-center"
                />
            </div>

            <div className="flex items-center justify-between space-x-4 p-4 px-10 mt-[-1.5rem]">
                <div className="flex ">
                    <div className='bg-white rounded-full '>
                    <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/361606265_3446022385728396_458335017174884602_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mNTeqb676rQAX-L0o-q&_nc_ht=scontent.fdad1-4.fna&oh=00_AfA27Ib7d1Lbqj-k75F7ZekKrnwN3ApZjCTfT5EJuMDGTw&oe=651E4190"

                        alt="Profile"
                        className="w-16 h-16 p-1 rounded-full"
                        />
                    </div>
                    <div className='my-2'>
                        <p className="text-xl font-bold">Nguyễn Thanh Nhật</p>
                        <p className="text-gray-600">ntn_1006</p>
                    </div>
                </div>
                <div>
                    <FaUserCog className='text-2xl'/>
                </div>
            </div>
            <div className='bg-slate-200 flex items-center justify-between px-10'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-medium'>12K</h1>
                    <p>Followers</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-medium'>12K</h1>
                    <p>Followers</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-medium'>12K</h1>
                    <p>Followers</p>
                </div>
            </div>
        </div>



    </div>
  </>
}

export default ProfileLeft