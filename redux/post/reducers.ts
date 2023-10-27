import { createReducer } from "@reduxjs/toolkit";
import { IPostPayload } from "@/interface/post";
import { getPostRequest, getPostSuccess, getPostFailure } from "./actions";
import { IPost } from "@/model/post";

interface IPostState {
    loading: boolean;
    listPost: IPost[];
    idPost:string;
}

const initialState: IPostState = {
    loading: false,
    listPost: [],
    idPost:''
}

export const postReducer = createReducer(initialState, {
    [getPostRequest.type]: (state, action) => {
        state.loading = true;
    },
    [getPostSuccess.type]: (state, action) => {
        state.loading = false;
        state.listPost = action.payload;
    },
    [getPostFailure.type]: (state, action) => {
        state.loading = false;
    }
})