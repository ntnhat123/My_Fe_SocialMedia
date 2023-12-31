import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter";
import { IPostPayload } from "@/interface/post";
const getPost = async () => {
    try{
        const url = apiRouter.getPost;
        const response = await axiosClient.get<IPostPayload>(url);
        return response.data.data;
    } catch (error) {
        throw error;
    }
}
const getPostById = async (id: string) => {
    try{
        const url = apiRouter.getPostOfUser + `/${id}`;
        const response = await axiosClient.get<IPostPayload>(url);
        return response.data.data;
    }   catch (error) {
        throw error;
    }
}

export { getPost, getPostById }