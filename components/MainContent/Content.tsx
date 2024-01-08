import React from 'react'
// import { story } from '../../data/story'
import { BsEmojiSmile } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsImages } from 'react-icons/bs'
import { BsFillFileEarmarkPostFill } from 'react-icons/bs'
import { BiVideo } from 'react-icons/bi'
import Listpost from '../Post/Listpost'
import { IUser } from '@/model/user'
import TransitionsModal from '../Post/Createpost'
import { profile } from 'console'

interface Props {
  profile: IUser
}
const Content = ({profile}: Props) => {
  return <>
    <div className='flex flex-col w-full h-full overflow-y-auto scrollbar-hidden' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex flex-col ">
            <TransitionsModal profile={profile}  />
            <Listpost />
            
        </div>
        
    </div>
  </>
}

export default Content