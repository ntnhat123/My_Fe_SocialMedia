import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter";
import { IPostPayload,IDeletePostPayload } from "@/interface/post";

const createPosts = async (content:string,images:string[],usercreator:string) => {
    const data = { content,images,usercreator };
    const url = apiRouter.createPost;
    try {
        const res = await axiosClient.post<IPostPayload>(url, data);
        return res.data;
    }
    catch (error) {
        throw error;
    }
}
const getPost = async () => {
    const url = apiRouter.getPost;
    return await axiosClient.get<IPostPayload>(url);
}

const deletePosts = async (idPost: string) => {
    const data = { id: idPost };
    const url = apiRouter.deletePost;
    try {
        const res = await axiosClient.post<IDeletePostPayload>(url, data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const updatePosts = async (idPost: string, content: string, images: string[]) => {
    const data = { id: idPost, content, images };
    const url = apiRouter.updatePost;
    try {
        const res = await axiosClient.post<IPostPayload>(url, data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const likePost = async (idPost: string) => {
    const data = { id: idPost };
    const url = apiRouter.likePost;
    try {
        const res = await axiosClient.post<IPostPayload>(url, data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export { getPost, deletePosts,createPosts,updatePosts,likePost }