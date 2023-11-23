import { IComment } from '@/model/comment';
import { IUser } from '@/model/user';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface ICommentsContainer {
    postId: string;
    userId: string;
    comment: IComment;
}

const CommentContainer = ({postId,userId,comment}: ICommentsContainer) => {
  return (
    <div> 
        {comment && comment.map((singleComment, index) => (
            <div key={index} className="flex w-full items-center justify-center gap-2 px-5">
                <div className="w-10 h-10 rounded-full object-cover overflow-hidden">
                    <img src={singleComment.usercreator?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' />
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex flex-col">
                                <span className="font-bold text-lg">{singleComment.usercreator?.fullName}</span>
                                <span className="text-sm text-gray-400">
                                    {/* Additional details if needed */}
                                </span>
                            </div>
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