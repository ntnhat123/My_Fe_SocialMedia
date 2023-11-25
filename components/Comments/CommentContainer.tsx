import { IComment } from '@/model/comment';
import { IUser } from '@/model/user';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface ICommentsContainer {
    postId: string;
    userId: string;
    comment: IComment[];
}

const CommentContainer = ({postId,userId,comment}: ICommentsContainer) => {
  return (
    <div> 
        {comment && comment.map((singleComment, index) => (
            <div key={index} className="flex w-full items-center justify-center gap-2 px-5">
                <div className='w-10 h-10 rounded-full object-cover overflow-hidden '  >
                    <img src={singleComment?.usercreator?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex w-full items-center justify-between">
                                <span className="font-bold text-lg">{singleComment.usercreator?.fullName}</span>
                                <span className="text-sm text-gray-400">
                                    {/* // viết xử lý thời gian theo ngày tháng và mới comment thì hiện "vừa xong" còn lâu hơn thì hiện "x phút trước" */}
                                    {
                                        (new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60) < 60 ?

                                            (new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60) < 1 ?
                                                "Vừa xong" :
                                                Math.floor((new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60)) + " phút trước" :
                                            Math.floor((new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60 * 60)) + " giờ trước"
                                            // Math.floor((new Date().getTime() - new Date(singleComment?.createdAt).getTime()) / (1000 * 60 * 60 * 24)) + " ngày trước"
    
                                    }
                                </span>
                        </div>
                        <div className="flex w-full">
                            <span className="text-lg">{singleComment.content}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}

    </div>
  )
}

export default CommentContainer