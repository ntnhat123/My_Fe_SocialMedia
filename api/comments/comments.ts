import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter";
import { ICommentPayload } from "@/interface/comment";

const getAllComment = async () => {
    const url = apiRouter.getAllComment;
    try {
        const res = await axiosClient.get<ICommentPayload>(url);
        return res.data;
    }catch (error) {
        throw error;
    }
}

const createComment = async (content: string, usercreator: string, postId: string) => {
    const data = { content, usercreator, postId };
    const url = apiRouter.createComment;
    try {
        const res = await axiosClient.post<ICommentPayload>(url, data);
        console.log(res)
        return res.data;
    }
    catch (error) {
        throw error;
    }
}

export { getAllComment, createComment }
