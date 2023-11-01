import React, { useEffect } from 'react'
import { BiLike } from 'react-icons/bi'
import { FaEllipsisH, FaRegComment } from 'react-icons/fa'
import { PiShareFat } from 'react-icons/pi'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/authContext'
import { getPost, updatePosts } from '@/api/post/post'
import { IPost } from '@/model/post'
import { useDispatch, useSelector } from "react-redux"
import { getPostRequest , getPostSuccess, getPostFailure,getPostOfUserRequest,getPostOfUserFailure,getPostOfUserSuccess } from '@/redux/post/actions'
import { postList,postListUser } from '@/redux/post/selectors'
import { deletePosts } from '@/api/post/post'
import { MdOutlineClose } from 'react-icons/md'

const Listpost = () => {
    const router = useRouter()
    const { user } = useAuth()
    const listpost = useSelector(postList)
    const listpostuser = useSelector(postListUser)
    const listposts = router.pathname === '/profile/[id]' ? listpostuser : listpost
    const [post, setPost] = React.useState<IPost[]>([])
    const dispatch = useDispatch()
    const [deletePostId, setDeletePostId] = React.useState<string | null>(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [updatePostId, setUpdatePostId] = React.useState<string | null>(null);

    useEffect(() => {
        if (listposts) {
            const sortedPosts = [...listposts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setPost(sortedPosts);
        }
    }, [listposts]);
    

    const handleDeletePost = (idPost: string) => {
        setDeletePostId(idPost);
        setModalVisible(true);
    };

    const confirmDeletePost = async (idPost: string) => {
        try {
            await deletePosts(idPost);
            const newPost = post.filter((post) => post._id !== idPost);
            setPost(newPost);
        } catch (error) {
            console.log(error);
        }
        setDeletePostId(null);
        setModalVisible(false);
    };

    const cancelDelete = () => {
        setDeletePostId(null);
        setModalVisible(false);
    };

    const handleUpdatePost = () => {

    };
    
    return (
        <div className='flex flex-col w-full h-full '>
            {
                post?.map((post,index) => (
                    <div key={index} className='flex flex-col w-full h-full bg-white rounded-lg mb-1'>
                        <div className='flex justify-between mx-3'> 
                            <div className='flex items-center my-2 gap-2'>
                                <div className='w-10 h-10 rounded-full object-cover overflow-hidden'>
                                    <img src={post?.usercreator?.avatar} alt="" className='overflow-hidden w-full object-cover rounded-full' />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h1 className='font-bold text-xl'>{post.usercreator?.fullName}</h1>
                                    <h1 className='text-gray-500 text-sm'>
                                        { 
                                            (new Date().getTime() - new Date(post?.createdAt).getTime()) / (1000 * 60) < 60 ?
                                            Math.floor((new Date().getTime() - new Date(post?.createdAt).getTime()) / (1000 * 60)) + ' phút trước' :
                                            (new Date().getTime() - new Date(post?.createdAt).getTime()) / (1000 * 60 * 60) < 24 ?
                                            Math.floor((new Date().getTime() - new Date(post?.createdAt).getTime()) / (1000 * 60 * 60)) + ' giờ trước' :
                                            new Date(post?.createdAt).toLocaleDateString()
                                        }
                                    </h1>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className=' rounded-full hover:bg-slate-200 p-3' onClick={handleUpdatePost}><FaEllipsisH /></button>
                                <button className=' rounded-full hover:bg-slate-200 p-3' onClick={()=> handleDeletePost(post._id)}><MdOutlineClose /></button>
                                {deletePostId === post._id && (
                                     <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
                                     <div className='bg-white p-4 rounded-lg'>
                                         <p>Bạn có chắc muốn xóa bài đăng này?</p>
                                         <div className="flex justify-center mt-4 space-x-4">
                                             <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => confirmDeletePost(post._id)}>Xác nhận</button>
                                             <button className="px-4 py-2 bg-gray-300 rounded" onClick={cancelDelete}>Hủy</button>
                                         </div>
                                     </div>
                                 </div>
                                )}
                            </div>               
                        </div>
                        <div className='flex mx-3'>
                            <h1>{post?.content}</h1>
                        </div>
                        <div className="w-full flex flex-wrap">
                            {post.images?.map((image, index) => (
                                <div key={index} className={
                                    `${post.images?.length === 1 ? 'w-full' : post.images?.length === 2 ? 'w-1/2' : 'w-1/3'} px-0.5`
                                }>
                                    <img src={image} className="object-cover w-full " alt="" />
                                </div>
                            ))}
                        </div>

                        <div className="flex mx-3">
                            <div className="flex-grow">
                                {post?.likes?.length > 0 ? `${post?.likes?.length} lượt thích` : ``}
                            </div>
                            <div className='flex w-full flex-1 items-end justify-end gap-2'>
                                <div className='grow-0 flex'>
                                    {post?.comments?.length > 0 ? `${post?.comments?.length} bình luận` : ``}
                                </div>
                                <div className='flex '>
                                    {}
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
                ))
            } 
          
        </div>
    )
}

export default Listpost