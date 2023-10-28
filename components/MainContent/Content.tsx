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
            <Listpost />
            
        </div>
        
    </div>
  </>
}

export default Content