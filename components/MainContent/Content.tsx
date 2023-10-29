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
            
            <Listpost />
            
        </div>
        
    </div>
  </>
}

export default Content