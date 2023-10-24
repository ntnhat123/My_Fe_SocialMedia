import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter";
import { ILoginByGmailPayload } from "@/interface/login";

export const getLoginByEmail = (email: string, password: string) => {
    const data = {
        email,
        password
    }
    const response =  axiosClient.post<ILoginByGmailPayload>(apiRouter.authLogin, data)
    return response
}
