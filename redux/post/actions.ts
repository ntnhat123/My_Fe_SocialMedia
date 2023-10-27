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

