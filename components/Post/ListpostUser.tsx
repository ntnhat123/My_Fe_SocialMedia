import React, { useEffect } from 'react'
import { BiLike } from 'react-icons/bi'
import { FaEllipsisH, FaRegComment } from 'react-icons/fa'
import { PiShareFat } from 'react-icons/pi'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/authContext'
import { getPost } from '@/api/post/post'
import { IPost } from '@/model/post'
import { useDispatch, useSelector } from "react-redux"
import { getPostOfUserRequest,getPostOfUserFailure,getPostOfUserSuccess } from '@/redux/post/actions'
import { postListUser } from '@/redux/post/selectors'
import Listpost from './Listpost'


const ListpostUser = () => {
    const { user } = useAuth()
    const router = useRouter()
    const listpost = useSelector(postListUser)
    const [post, setPost] = React.useState<IPost[]>([])
    const dispatch = useDispatch()
    useEffect(() => {
        if(router.query.id) {
            dispatch(getPostOfUserRequest({id: router.query.id as string}))
        }
    },[router.query.id, dispatch, user])
    
    return (
        
        <Listpost />
    )
}

export default ListpostUser