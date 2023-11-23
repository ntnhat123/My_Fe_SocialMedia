// import { IComment } from "@/model/comment";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { IoMdSend } from "react-icons/io";
// import { useAuth } from "@/context/authContext";
// import { createComment } from "@/api/comments/comments";
// import { useRouter } from "next/router";
// import { IPost } from "@/model/post";

// interface ICommentsContainer {
//     comments: IComment;
//     postId: string;
//     postOfcomment: IPost;
// }
// const Comments = ({comments,postId,postOfcomment}: ICommentsContainer) => {
//     const dispatch = useDispatch();
//     const router = useRouter();
//     const { user } = useAuth();
//     const [comment, setComment] = React.useState<IComment[]>([]);
//     const [commentId, setCommentId] = React.useState<string | null>(null);
//     const [postComment, setPostComment] = React.useState<IPost[]>([]);
//     const [modalVisible, setModalVisible] = React.useState(false);
//     const [inputValue, setInputValue] = React.useState('');
//     const [showComment, setShowComment] = React.useState<Record<string, boolean>>({});
        
//     const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInputValue(e.target.value);
//     }

//     const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await createComment(inputValue,user?._id as string,postId);
//             setInputValue('');
            
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     return (
//         <div className="relative w-full">  
//             <div className="flex w-full items-center justify-center gap-2 px-5">
//                 <form action="" onSubmit={handleOnSubmit} className="flex w-full items-center justify-center gap-2 px-5">
//                     <div className="w-10 h-10 rounded-full object-cover overflow-hidden">
//                         <img src={user?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }}/>
//                     </div>
//                     <div className="flex w-full">
//                         <input type="text" placeholder="Viết bình luận..." id="content" value={inputValue} onChange={handleOnChange} className="w-full outline-none bg-slate-200 rounded-full py-1 text-lg px-3" />
//                     </div>
//                     <div className="hover:bg-slate-200 rounded-full ">
//                         <button className="p-3"><IoMdSend /></button>
//                     </div>
//                 </form>
//             </div>
//             {
//                 postComment?.map((post,index) => (
//                     <div key={index} className="flex w-full items-center justify-center gap-2 px-5">
//                         <div className="w-10 h-10 rounded-full object-cover overflow-hidden">
//                             <img src={post?.comments?.usercreator?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' />
//                         </div>
//                         <div className="flex w-full">
//                             <div className="flex flex-col w-full">
//                                 <div className="flex w-full items-center justify-between">
//                                     <div className="flex flex-col">
//                                         <span className="font-bold text-lg"></span>
//                                         <span className="text-sm text-gray-400"></span>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <button className="hover:bg-slate-200 rounded-full p-2"><IoMdSend /></button>
//                                         <button className="hover:bg-slate-200 rounded-full p-2"><IoMdSend /></button>
//                                     </div>
//                                 </div>
//                                 <div className="flex w-full">
//                                     <span className="text-lg"></span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }

//         </div>
//     )
// }

// export default Comments

import { IComment } from "@/model/comment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdSend } from "react-icons/io";
import { useAuth } from "@/context/authContext";
import { createComment } from "@/api/comments/comments";
import { useRouter } from "next/router";
import { IPost } from "@/model/post";
import { getPostRequest } from "@/redux/post/actions";

interface IComments {
    comments: IComment;
    postId: string;
    postOfcomment: IPost;
}

const Comments = ({ comments, postId, postOfcomment }: IComments) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useAuth();
    const [comment, setComment] = React.useState<IComment[]>([]); // Initialize comments state with initial comments
    const [commentId, setCommentId] = React.useState<string | null>(null);
    const [postComment, setPostComment] = React.useState<IPost[]>([]); // You might want to initialize this state with initial posts
    const [modalVisible, setModalVisible] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const [showComment, setShowComment] = React.useState<Record<string, boolean>>({});

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newComment = await createComment(inputValue, user?._id as string, postId);
            setComment([...comment, newComment.data]);
            dispatch(getPostRequest());
            setInputValue('');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="relative w-full">
            <div className="flex w-full items-center justify-center gap-2 px-5">
                <form action="" onSubmit={handleOnSubmit} className="flex w-full items-center justify-center gap-2 px-5">
                    <div className="w-10 h-10 rounded-full object-cover overflow-hidden">
                        <img src={user?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }}/>
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

export default Comments;
