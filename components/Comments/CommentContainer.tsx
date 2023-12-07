import { IComment } from '@/model/comment';
import { IUser } from '@/model/user';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReplyComment from './ReplyComment';

interface ICommentsContainer {
    postId: string;
    userId: string;
    comment: IComment[];
}

const CommentContainer = ({postId,userId,comment}: ICommentsContainer) => {
    const [openReply, setOpenReply] = React.useState<Record<string, boolean>>({});
    const showReplyComment = (id: string) => {
        setOpenReply((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <div> 
            {comment && comment.map((singleComment, index) => (
                <div key={index} className="flex w-full flex-col">
                    <div className='flex items-center justify-center gap-2 px-5'>
                        <div className='w-10 h-10 rounded-full object-cover overflow-hidden '  >
                            <img src={singleComment?.usercreator?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
                        </div>
                        <div className="flex w-full flex-col">
                            <div className="flex flex-col w-full">
                                <div className="flex w-full items-center justify-between">
                                        <span className="font-bold text-lg">{singleComment.usercreator?.fullName}</span>
                                        <span className="text-sm text-gray-400">
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
                                <div className="flex w-full items-center gap-10">
                                    <span className="text-lg">{singleComment.content}</span>
                                    <span className='cursor-pointer hover:underline'
                                        onClick={() => showReplyComment(singleComment._id)}
                                    >Phản hồi</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex'>
                        {openReply[singleComment._id] &&
                            <ReplyComment />
                        }
                    </div>
                    

                </div>
            ))}

        </div>
    )
}

export default CommentContainer