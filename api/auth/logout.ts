import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter";
import { ILogoutPayload } from "@/interface/user";

export const getLogout = () => {
    const response =  axiosClient.get<ILogoutPayload>(apiRouter.logout)
    return response
}