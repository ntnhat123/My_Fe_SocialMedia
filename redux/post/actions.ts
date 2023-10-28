import { IPostPayload } from "@/interface/post";
import { getPost } from "@/api/post/post";
import {createAction} from '@reduxjs/toolkit';

export const getPostRequest = createAction('ACTION/GET_POST_REQUEST');


export const getPostSuccess = createAction<IPostPayload>(
    'ACTION/GET_POST_SUCCESS',
)

export const getPostFailure = createAction(
    'ACTION/GET_POST_FAILURE',
)

export const getPostOfUserRequest = createAction<{id:string}>('ACTION/GET_POST_OF_USER_REQUEST')

export const getPostOfUserSuccess = createAction<IPostPayload>(
    'ACTION/GET_POST_OF_USER_SUCCESS',
)

export const getPostOfUserFailure = createAction(
    'ACTION/GET_POST_OF_USER_FAILURE',
)
