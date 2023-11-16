import React from 'react'
import { useRouter } from 'next/router'
import { IUser } from '@/model/user'
import { getUserByIds } from '@/api/user/user'
import { useAuth } from '@/context/authContext'
import Listpost from '@/components/Post/Listpost'
import TransitionsModal from '@/components/Post/Createpost'
import { useDispatch } from 'react-redux'
import ListpostUser from '@/components/Post/ListpostUser'
import { getPostOfUserRequest } from '@/redux/post/actions'
import ModalEditUser from '@/components/EditProfile/ModalEditProflie'

const Profile = () => {
    const { user } = useAuth()
    const router = useRouter()
    const [profile , setProfile] = React.useState<IUser> ({} as IUser)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [openmodelEditUser, setOpenmodelEditUser] = React.useState<boolean>(false)    

    // const toggleModal = ()=> setOpenmodelEditUser(openmodelEditUser=> !openmodelEditUser);
    const handleOpen = () => setOpenmodelEditUser(true); 
    const handleClose = () => setOpenmodelEditUser(false);
    const dispatch = useDispatch()

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

    React.useEffect(() => {
        dispatch(getPostOfUserRequest({id: router.query.id as string}))
    },[router.query.id, dispatch, user])
    return (
        <div className=' w-full '> 
            <div className='xl:mx-52  bg-white  relative'>
                <div className='bg-gradient-to-t from-purple-400 via-pink-500 to-red-500 h-64 w-full rounded-b-3xl'>

                </div>
                <div className='flex -my-5'> 
                    <div className=' flex justify-between w-full h-full mx-7'>
                        <div className='flex rounded-full '>
                            <div className='w-40 h-40 rounded-full md:scale-100 scale-90 overflow-hidden'>
                                <img src={user?.avatar} alt="" className='overflow-hidden w-full h-full object-cover rounded-full' />
                            </div>
                            <div className='flex flex-col  justify-center items-start md:ml-7 '>
                                <h1 className='font-bold text-2xl'>{user?.fullName}</h1>
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
                            <button className='bg-slate-100 px-5 md:my-16 hidden md:block rounded-lg' onClick={handleOpen}>Chỉnh sửa trang cá nhân</button>
                            {
                                openmodelEditUser && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-500/20" onClick={handleClose} >
                                        <div className="absolute bg-white rounded shadow-lg md:w-2/4"  onClick={(e) => e.stopPropagation()}>
                                            <ModalEditUser profile={profile} setProfile={setProfile}
                                                setOpenmodelEditUser={setOpenmodelEditUser}
                                                openmodelEditUser={openmodelEditUser}
                                            />
                                        </div>
                                    </div>
                                )
                            }
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
                                        <TransitionsModal 
                                            profile={profile} 
                                        />
                                    </div>
                                    <div className='bg-white mt-3 rounded-lg my-3'>
                                        <ListpostUser/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default Profile