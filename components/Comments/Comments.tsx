import { IComment } from "@/model/comment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdSend } from "react-icons/io";
import { useAuth } from "@/context/authContext";
import { createComment } from "@/api/comments/comments";
import { useRouter } from "next/router";

interface ICommentsContainer {
    comments: IComment;
    postId: string;
}
const Comments = ({comments,postId}: ICommentsContainer) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useAuth();
    const [comment, setComment] = React.useState<IComment[]>([]);
    const [commentId, setCommentId] = React.useState<string | null>(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
        
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createComment(inputValue,user?._id as string,postId);
            setInputValue('');
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <div className="relative w-full">
            {
                comment?.map((comment,index) => (
                    <div key={index} className="flex w-full items-center justify-center gap-2 px-5">
                        <div className="w-10 h-10 rounded-full object-cover overflow-hidden">
                            <img src="https://picsum.photos/200" alt="" className='overflow-hidden w-full object-cover rounded-full' />
                        </div>
                        <div className="flex w-full">
                            <div className="flex flex-col w-full">
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-lg">{comment?.usercreator?.fullName}</span>
                                        <span className="text-sm text-gray-400">{comment?.usercreator?.createdAt}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="hover:bg-slate-200 rounded-full p-2"><IoMdSend /></button>
                                        <button className="hover:bg-slate-200 rounded-full p-2"><IoMdSend /></button>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <span className="text-lg">{comment?.content}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
            <div className="flex w-full items-center justify-center gap-2 px-5">
                <form action="" onSubmit={handleOnSubmit} className="flex w-full items-center justify-center gap-2 px-5">
                    <div className="w-10 h-10 rounded-full object-cover overflow-hidden">
                        <img src="https://picsum.photos/200" alt="" className='overflow-hidden w-full object-cover rounded-full' />
                    </div>
                    <div className="flex w-full">
                        <input type="text" placeholder="Viết bình luận..." id="content" value={inputValue} onChange={handleOnChange} className="w-full outline-none bg-slate-200 rounded-full py-1 text-lg px-3" />
                    </div>
                    <div className="hover:bg-slate-200 rounded-full ">
                        <button className="p-3"><IoMdSend /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comments