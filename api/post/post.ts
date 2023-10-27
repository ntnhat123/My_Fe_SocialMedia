import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter";
import { IPostPayload } from "@/interface/post";
const getPost = async () => {
    const url = apiRouter.getPost;
    return await axiosClient.get<IPostPayload>(url);
}

export { getPost }