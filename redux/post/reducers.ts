import { createReducer } from "@reduxjs/toolkit";
import { IPostPayload } from "@/interface/post";
import { getPostRequest, getPostSuccess,getPost, getIdPost, getPostFailure, getPostOfUserRequest,getPostOfUserSuccess,getPostOfUserFailure } from "./actions";
import { IPost } from "@/model/post";

interface IPostState {
    loading: boolean;
    listPost: IPost[];
    listPostOfUser: IPost[];
    idPost:string;
    choosePost : {
        content : string,
        image : string,
        idPost : string,
    }
}

const initialState: IPostState = {
    loading: false,
    listPost: [],
    listPostOfUser: [],
    idPost: '',
    choosePost : {
        content : '',
        image : '',
        idPost : '',
    },
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
    },
    [getPostOfUserRequest.type]: (state, action) => {
        state.loading = true;
    },
    [getPostOfUserSuccess.type]: (state, action) => {
        state.loading = false;
        state.listPostOfUser = action.payload;
    },
    [getPostOfUserFailure.type]: (state, action) => {
        state.loading = false;
    },
    [getIdPost.type]: (state, action) => {
        state.idPost = action.payload;
    },
    [getPost.type]: (state, action) => {
        state.choosePost = action.payload;
    }
})

