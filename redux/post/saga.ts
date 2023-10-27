import {call, ForkEffect, put, takeLatest} from 'redux-saga/effects';
import { getPostRequest, getPostSuccess, getPostFailure } from "./actions";
import { getPost } from './api';
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

function* postSaga(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(getPostRequest.type, getPostWoker);
}

export default postSaga;