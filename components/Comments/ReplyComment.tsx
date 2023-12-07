import React from 'react'
import { IoMdSend } from 'react-icons/io'
import { useSelector } from 'react-redux'

const ReplyComment = () => {
    const [inputValue, setInputValue] = React.useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        console.log(setInputValue)
    }

    return (
        // <div className='flex w-full items-center justify-center gap-2 px-5 pl-10 '>
        //             <div className='w-10 h-10 rounded-full object-cover overflow-hidden '  >
        //                 <img src="jsia" alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
        //             </div>
        //             <div className="flex w-full flex-col">
        //                 <div className="flex flex-col w-full">
        //                     <div className="flex w-full items-center justify-between">
        //                             <span className="font-bold text-lg">nhat</span>
        //                             {/* <span className="text-sm text-gray-400">
        //                                 {
        //                                     (new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60) < 60 ?
        //                                         (new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60) < 1 ?
        //                                             "Vừa xong" :
        //                                             Math.floor((new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60)) + " phút trước" :
        //                                         Math.floor((new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60 * 60)) + " giờ trước"
        //                                         // Math.floor((new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60 * 60 * 24)) + " ngày trước"
        //                                 }
        //                             </span> */}
        //                     </div>
        //                     <div className="flex w-full items-center gap-10">
        //                         <span className="text-lg">Noi dung</span>
        //                         {/* <span className='cursor-pointer' onClick={
        //                             () => {
        //                                 setOpenReply(!openReply)  
        //                             }
        //                         }>{singleComment.reply.length} Trả lời</span> */}
        //                     </div>
        //                 </div>
        //             </div>    
        // </div>

        <div className="relative w-full">
            <div className="flex w-full items-center justify-center gap-2 px-5">
                <form action=""  className="flex w-full items-center justify-center gap-2 px-5">
                    <div className="w-10 h-10 rounded-full object-cover overflow-hidden">
                        <img src="dáh" alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }}/>
                    </div>
                    <div className="flex w-full">
                        <input type="text" placeholder="Viết bình luận..." value={inputValue} onChange={handleInputChange} id="content" className="w-full outline-none bg-slate-200 rounded-full py-1 text-lg px-3" />
                    </div>
                    <div className="hover:bg-slate-200 rounded-full ">
                        <button className="p-3"><IoMdSend /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ReplyComment