import React from 'react'
import { useRouter } from 'next/router'
import { IUser } from '@/model/user'
import { getUserByIds } from '@/api/user/user'
import { useAuth } from '@/context/authContext'
import Listpost from '@/components/Post/Listpost'
import TransitionsModal from '@/components/Post/Createpost'

const Profile = () => {
    const { user } = useAuth()
    const router = useRouter()
    const [profile , setProfile] = React.useState<IUser> ({} as IUser)
    const [loading, setLoading] = React.useState<boolean>(false)

    const getProfile = async () => {
        try{
            const res = await getUserByIds(router.query.id as string)
            setProfile(res.data.data)
            setLoading(true)
        }catch(err){
            console.log(err)
        }
    }

    React.useEffect(() => {
        getProfile()
    }, [router.query.id ])
    
    return (
        <div className=' w-full '> 
            <div className='xl:mx-52  bg-white  relative'>
                <div className='bg-red-400 h-72 rounded-b-xl'>
                    
                </div>
                <div className='flex -my-5'> 
                    <div className=' flex justify-between w-full h-full mx-7'>
                        <div className='flex rounded-full '>
                            <div className='w-40 md:scale-100 scale-90 '>
                                <img src={profile.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' />
                            </div>
                            <div className='flex flex-col  justify-center items-start md:ml-7 '>
                                <h1 className='font-bold text-2xl'>{profile.fullName}</h1>
                                <div className="flex flex-col gap-2 md:flex-row ">
                                    <div className="flex items-center">
                                        <span className="font-bold">{ profile.followers?.length}</span><span>người theo dõi</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-bold">{ profile.following?.length }</span><span>đang theo dõi</span>
                                    </div>
                                </div>

                              
                            </div>
                        </div>
                        <div className='flex justify-center w-auto hiden md:block'>
                            <button className='bg-slate-100 px-5 md:my-16 hidden md:block rounded-lg'>Chỉnh sửa trang cá nhân</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-slate-200  mt-7'>
                <div className='xl:mx-52 '>
                    <div className='flex flex-col md:flex-row w-full gap-3'>
                                <div className="md:w-2/5  flex flex-col h-screen bg-white mt-3 rounded-lg">
                                    <div className='flex'>
                                        <h1>Giới thiệu</h1>
                                    </div>
                                </div>
                                <div className="md:w-3/5 ">
                                    <div className='bg-white mt-3 rounded-lg'>
                                        <TransitionsModal />
                                    </div>
                                    <div className='bg-white mt-3 rounded-lg my-3'>
                                        <Listpost />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default Profile