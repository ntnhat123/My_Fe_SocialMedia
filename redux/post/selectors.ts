import {createSelector} from '@reduxjs/toolkit';
import type { RootState } from '../reducers';

const selectPost = (state: RootState) => state.post;

export const postList = createSelector(
    selectPost,
    (post) => post.listPost,
)

export const postLoading = createSelector(
    selectPost,
    (post) => post.loading,
)

export const postListUser = createSelector(
    selectPost,
    (post) => post.listPostOfUser,
)

export const postLoadingUser = createSelector(
    selectPost,
    (post) => post.loading,
)