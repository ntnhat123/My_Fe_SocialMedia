import React, { useState } from 'react';
import { FaMapMarkerAlt, FaUserTag } from 'react-icons/fa';
import { IoMdImages, } from 'react-icons/io';
import {MdInsertEmoticon, MdVideocam} from 'react-icons/md'
import { PiFlagFill } from 'react-icons/pi';
import { IUser } from '@/model/user';
import { useAuth } from '@/context/authContext';
import { createPosts } from '@/api/post/post';
import { useDispatch,useSelector } from 'react-redux';
import { getPostOfUserRequest,getPostRequest } from '@/redux/post/actions';
import { useRouter } from 'next/router';


export default function TransitionsModal(
) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [showButtonBackground, setShowButtonBackground] = useState(false);
  const dispatch = useDispatch();
  const [inputImage, setInputImage] = useState('');
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 0) {
      setShowButtonBackground(true);
    } else {
      setShowButtonBackground(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const data = await createPosts(inputValue, inputImage)
      if (data) {
        dispatch(getPostRequest());
        dispatch(getPostOfUserRequest({ id: router.query.id as string }));
        handleInputChange(
          { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>
        );
        setInputImage('');
        handleClose();
      }
    }
  }
  return (
    <div className="text-center flex flex-col py-3">
      <div className='flex w-full justify-start items-center mx-3 gap-2 border-b-2 pb-3'>
        <div className='w-10 h-10 rounded-full overflow-hidden'>
          <img src={user?.avatar} alt="" className='w-full h-full overflow-hidden object-cover rounded-full' />
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
            <form onSubmit={handleSubmit} >
              <div className='py-2 border-b-2'>
                <h1 className='font-bold text-2xl'>Tạo bài viết</h1>
              </div>
              <div className='flex w-full '>
                <form action="" className='w-full'>
                  <div className='flex justify-start items-center mx-4 gap-2 my-2 '> 
                      <div className='w-10 h-10 overflow-hidden rounded-full  bg-slate-500'>
                          <img src={user?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' />
                      </div>
                      <div className='font-bold'>
                        <h1>{user?.fullName}</h1>
                      </div>
                  </div>
                  <div className='w-full mb-14'>
                      <input type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                      className='w-full h-full px-4 outline-none text-2xl' placeholder='Bạn đang nghĩ gì ?' />
                  </div>
                  <div className='mx-4 flex'>
                    <div className='flex w-full gap-3 justify-center items-center rounded-xl border-2 p-4 '>
                      <h1 className='font-bold'>Thêm vào bài viết của bạn</h1>
                        <label htmlFor="file-input">
                          <div className='hover:bg-slate-200 p-2 rounded-full text-lime-500'>
                              <IoMdImages size={30} />
                              <input type="file" className='hidden' id="file-input" />
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
            </form>
          </div>
          
        </div>
      )}
    </div>
  );
}
