import {call, ForkEffect, put, takeLatest} from 'redux-saga/effects';
import { getPostRequest, getPostSuccess, getPostFailure,getPostOfUserRequest,getPostOfUserSuccess,getPostOfUserFailure } from "./actions";
import { getPost, getPostById } from './api';
import { IPostPayload } from '@/interface/post';

function* getPostWoker() {
    try {
        const response: IPostPayload = yield call(getPost)
        if(response !== null){
            yield put(getPostSuccess(response))
        }else{
            yield put(getPostFailure());
        }
    } catch (error) {
        yield put(getPostFailure());
    }
}

function* getPostOfUserWoker(
    action: ReturnType<typeof getPostOfUserRequest>
) {
    try{
        const response: IPostPayload = yield call(getPostById,action.payload.id)
        if(response !== null){
            yield put(getPostOfUserSuccess(response))
        }else{
            yield put(getPostOfUserFailure());
        }
    }catch(error){
        yield put(getPostOfUserFailure());
    }
}

function* postSaga(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(getPostRequest.type, getPostWoker);
    yield takeLatest(getPostOfUserRequest.type,getPostOfUserWoker);
}

export default postSaga;