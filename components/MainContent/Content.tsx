import React from 'react'
// import { story } from '../../data/story'
import { BsEmojiSmile } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsImages } from 'react-icons/bs'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { BiVideo } from 'react-icons/bi'
import Listpost from '../Post/Listpost'
import { IUser } from '@/model/user'

type Props = {}

const Content = () => {
  return <>
    <div className='flex flex-col w-full h-full '>
        <div className="flex flex-col ">
            <h1>Just for you</h1>
            <div className="flex w-full overflow-x-scroll no-scrollbar">
                <div className="flex space-x-4">
                    {/* {story.map((item, index) => (
                        <div key={index} className="flex flex-col rounded-full w-16  bg-gray-200 mr-2">
                            <img src={item.Image} alt="" className='rounded-full w-full  '/>
                            <p className='text-xs'>{item.title}</p>
                        </div>
                    ))} */}
                </div>
            </div>


            {/* <div className='bg-white'>
                <div className='flex  my-1 px-7 py-4 border-b'>
                    
                        <img src=
                            'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/361606265_3446022385728396_458335017174884602_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mNTeqb676rQAX-L0o-q&_nc_ht=scontent.fdad1-4.fna&oh=00_AfA27Ib7d1Lbqj-k75F7ZekKrnwN3ApZjCTfT5EJuMDGTw&oe=651E4190'
                        alt="" className='rounded-full w-16 ' />
                   
                    <div className="flex items-center relative rounded-3xl bg-gray-200 w-full ml-5">
                        <BsEmojiSmile className="absolute right-5 text-2xl text-gray-500" />
                        <input type="text" placeholder='What is on your mind?' className='outline-none flex-1 bg-gray-200 px-5' />

                    </div>
                </div>
                <div className='flex justify-between items-center my-1 mx-10'>
                    <button className='flex items-center hover:bg-slate-200 px-7 py-2 hover:rounded-xl'>
                        <BiVideo className='text-xl' />
                        <span className='ml-2'>Video</span>
                    </button>
                    <button className='flex items-center hover:bg-slate-200 px-7 py-2 hover:rounded-xl'>
                        <BsImages className='text-xl' />
                        <span className='ml-2'>Image</span>
                    </button>
                    <button className='flex items-center hover:bg-slate-200 px-7 py-2 hover:rounded-xl'>
                        <BsFillFileEarmarkPostFill className='text-xl' />
                        <span className='ml-2'>Post</span>
                    </button>
                </div>

            </div> */}
            <Listpost />
            
        </div>
        
    </div>
  </>
}

export default Content