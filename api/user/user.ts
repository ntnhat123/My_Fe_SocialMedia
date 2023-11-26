import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter"; 
import { IInforUserPayload } from "@/interface/user";

export const getUserByIds = async (id: string) => {
    const url = apiRouter.getUserById;
    return await axiosClient.get<IInforUserPayload>(`${url}/${id}`);
}

export const updateUser = async (id: string, fullName:string, avatar: string,gender:string,address:string,story:string,mobile:string ) => {
    const url = apiRouter.updateUser;
    const data = {
        id,
        fullName,
        avatar,
        gender,
        address,
        story,
        mobile
    };
    const res = await axiosClient.post<IInforUserPayload>(`${url}/${id}`,data);
    return res.data;
}
export const follow = async (_id: string) => {
    const url = apiRouter.follow;
    const data = {
        _id
    };
    const res = await axiosClient.post<IInforUserPayload>(url,data);
    return res.data;
}

export const searchUsers = async (fullName : string , id : string) => {
    const res = await axiosClient.post<IInforUserPayload>(
        `${apiRouter.searchUser}?fullName=${fullName}&id=${id}`
    );
    return res.data;
}