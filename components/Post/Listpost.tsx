import React from 'react'
import { BiLike } from 'react-icons/bi'
import { FaEllipsisH, FaRegComment } from 'react-icons/fa'
import { PiShareFat } from 'react-icons/pi'

type Props = {}

const Listpost = (props: Props) => {
  return (
    <div className='flex w-full h-full'>
        <div className='flex flex-col w-full h-full'>
            <div className='flex justify-between mx-3'> 
                <div className='flex items-center my-2 gap-2'>
                    <div className='w-10 rounded-full   bg-slate-500'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png" alt="" className='overflow-hidden w-full object-cover rounded-full' />
                    </div>
                    <div className='flex flex-col items-start'>
                        <h1 className='font-bold text-xl'>N t n</h1>
                        <h1 className='text-gray-500 text-sm'>Vừa xong</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button className=' rounded-full hover:bg-slate-200 p-3'><FaEllipsisH /></button>
                </div>               
            </div>
            <div className='flex mx-3'>
                <h1>Hello mn ...</h1>
            </div>
            <div className='w-full'>
                <img src="https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg" className='object-cover ' alt="" />
            </div>
            <div className="flex mx-3">
                <div className="flex-grow">
                    200
                </div>
                <div className='flex w-full flex-1 items-end justify-end gap-2'>
                    <div className='grow-0 flex'>
                        22 bình luận
                    </div>
                    <div className='flex '>
                        3 chia sẻ
                    </div>  
                </div>
            </div>

            <div className='flex justify-center items-center my-2 md:mx-3 text-gray-500'>
                <div className='flex flex-1 justify-center w-full py-1 hover:bg-slate-100'>
                    <button className='flex justify-center items-center gap-2'><BiLike />Thích</button>
                </div>
                <div className='flex flex-1 justify-center w-full py-1 hover:bg-slate-100'>
                    <button className='flex justify-center items-center gap-2'><FaRegComment />Bình luận</button>
                </div>
                <div className='flex flex-1 justify-center w-full py-1 hover:bg-slate-100'>
                    <button className='flex justify-center items-center gap-2'><PiShareFat />Chia sẻ</button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Listpost