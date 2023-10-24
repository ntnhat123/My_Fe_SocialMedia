import { apiRouter } from "@/config/apiRouter"
import { ILoginByGmailPayload } from "@/interface/login"
import axiosClient from "@/lib/api/axiosClient"
export const loginbyToken = (token : string) => {
    const data = {
        token
    }
        const response =  axiosClient.post<ILoginByGmailPayload>(apiRouter.loginByToken, data)
        return response
}
