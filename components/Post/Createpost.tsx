import React, { useState,useEffect } from 'react';
import { FaMapMarkerAlt, FaUserTag } from 'react-icons/fa';
import { IoMdImages, } from 'react-icons/io';
import {MdInsertEmoticon, MdVideocam} from 'react-icons/md'
import { PiFlagFill } from 'react-icons/pi';
import { IUser } from '@/model/user';
import { useAuth } from '@/context/authContext';
import { createPosts,updatePosts } from '@/api/post/post';
import { useDispatch,useSelector } from 'react-redux';
import { getPostOfUserRequest,getPostRequest } from '@/redux/post/actions';
import { useRouter } from 'next/router';
import { IPost } from '@/model/post';

interface IProps {
  profile: IUser;
  updatePost?: boolean;
  setUpdatePost?: React.Dispatch<React.SetStateAction<IPost>>;
}

export default function CreatePost({ profile, 
  updatePost,
  setUpdatePost
}: IProps) {
  // console.log(profile)
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [showButtonBackground, setShowButtonBackground] = useState(false);
  const dispatch = useDispatch();
  const [inputImage, setInputImage] = useState<any>('');
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 0) {
      setShowButtonBackground(true);
    } else {
      setShowButtonBackground(false);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = ['image/png', 'image/jpeg', 'image/jpg'];
    const file = e.target.files?.[0];
    if (file && type.includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setInputImage(null);
      alert('Chỉ được upload file ảnh');
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      if(router.pathname !== "profile/[id]"){
        if (inputValue.length > 0) {
          const res = await createPosts(inputValue, inputImage, user?._id as string)
          if (res) {
            dispatch(getPostRequest());
            dispatch(getPostOfUserRequest({ id: user?._id as string }));
            setInputValue('');
            setInputImage(null);
            handleClose();
          }
        } else {
          alert('Bạn chưa nhập gì');
        }
      } else{
        // if (inputValue.length > 0) {
        //   const res = await updatePosts(user?._id as string,inputValue, inputImage)
        //   console.log(res.data)
        //   if (res) {
        //     dispatch(getPostRequest());
        //     dispatch(getPostOfUserRequest({ id: user?._id as string }));
        //     setInputValue('');
        //     setInputImage(null);
        //     handleClose();
        //     setUpdatePost
        //   }
        // } else {
        //   alert('Bạn chưa nhập gì');
        // }
      }
    }catch(error){
      console.log(error)
    }
  };
  
  return (
    <div className="text-center flex flex-col py-3 bg-white mb-1 rounded-lg">
      <div className='flex w-full justify-start items-center mx-3 gap-2 border-b-2 pb-3'>
        <div className='w-12 h-10 rounded-full overflow-hidden cursor-pointer' onClick={() => router.push(`/profile/${user?._id}`)}>
          <img src={user?.avatar} alt="" className='w-full h-full overflow-hidden object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
        </div>
        <div className='w-full mr-6'>
          <input type="text" placeholder='Bạn đang nghĩ gì?' className='w-full outline-none bg-slate-200 rounded-full py-1 text-lg px-3 ' onClick={handleOpen} />
        </div>
      </div>
      <div className='flex mx-3'>
        <div className='flex flex-1 justify-center items-center hover:bg-slate-200 hover:rounded-lg'>
          <button className=' rounded-full text-red-600 p-2'><MdVideocam size={30} /></button> <span className='text-slate-500'>Video trực tiếp</span>
        </div>
        <div className='flex flex-1 justify-center items-center hover:bg-slate-200 hover:rounded-lg'>
          <button className=' rounded-full text-lime-600 p-2'><IoMdImages size={30} /></button><span className='text-slate-500'>Ảnh/video</span>
        </div>
        <div className='flex flex-1 justify-center items-center hover:bg-slate-200 hover:rounded-lg'>
          <button className=' rounded-full text-blue-600 p-2'><PiFlagFill size={30} /></button><span className='text-slate-500'>Sự kiện trong đời</span>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-500/20" onClick={handleClose}>
          <div className="absolute bg-white rounded shadow-lg w-[500px]"  onClick={(e) => e.stopPropagation()}>
              <div className='py-2 border-b-2'>
                <h1 className='font-bold text-2xl'>{router.pathname !== "profile/[id]" ? "Tạo bài viết" : "Chỉnh sửa bài viết"} </h1>
              </div>
              <div className='flex w-full '>
                <form onSubmit={handleSubmit} className='w-full'>
                  <div className='flex justify-start items-center mx-4 gap-2 my-2 '> 
                      <div className='w-10 h-10 overflow-hidden rounded-full  bg-slate-500'>
                          <img src={user?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full'style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
                      </div>
                      <div className='font-bold'>
                        <h1>{user?.fullName}</h1>
                      </div>
                  </div>
                  <div className='w-full mb-14'>
                      <input type="text" value={inputValue} onChange={handleInputChange} className='w-full h-full px-4 outline-none text-2xl' placeholder='Bạn đang nghĩ gì ?' />
                  </div>
                  <div className='mx-4 flex'>
                    <div className='flex w-full gap-3 justify-center items-center rounded-xl border-2 p-4 '>
                      <h1 className='font-bold'>Thêm vào bài viết của bạn</h1>
                        <label htmlFor="file-input" className='cursor-pointer'>
                          <div className='hover:bg-slate-200 p-2 rounded-full text-lime-500'>
                              <IoMdImages size={30} />
                              <input type="file" onChange={handleImageChange} className='hidden' id="file-input" />
                          </div>
                        </label>
                      <div className='hover:bg-slate-200 p-2 rounded-full text-blue-500'><FaUserTag size={30} /></div>
                      <div className='hover:bg-slate-200 p-2 rounded-full text-yellow-500'><MdInsertEmoticon size={30} /></div>
                      <div className='hover:bg-slate-200 p-2 rounded-full text-red-600'><FaMapMarkerAlt size={30} /></div>
                    </div>
                  </div>
                  <div className='w-full px-4 pb-4'> 
                    <button 
                      className={`w-full ${showButtonBackground ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300'} text-white font-bold py-2 px-4 rounded mt-4`}
                    >Đăng</button>
                  </div>
                </form>
              </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
