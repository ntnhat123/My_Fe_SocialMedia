import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter"; 
import { IInforUserPayload } from "@/interface/user";

export const getUserByIds = async (id: string) => {
    const url = apiRouter.getUserById;
    return await axiosClient.get<IInforUserPayload>(`${url}/${id}`);
}

