import axiosClient from "@/lib/api/axiosClient";
import { apiRouter } from "@/config/apiRouter";

const getRegisterByEmail = async (fullName:string,email: string, password: string,gender:string) => {
    const url = apiRouter.authRegister;
    const data = {
        fullName,email,password,gender
    }
    return await axiosClient.post(url, data);

}

export { getRegisterByEmail }