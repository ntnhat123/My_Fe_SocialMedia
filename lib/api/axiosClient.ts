import axios,{AxiosInstance,AxiosRequestConfig} from "axios";
import * as queryString from "querystring";
import * as https from "https";
import { configURL } from '@/utils/constant';
import { getTokenLocalStorage } from '@/Provider/localStorage';

const config:AxiosRequestConfig = {
    baseURL: configURL.baseURL,
    paramsSerializer:{
        encode:(string:  string) => queryString.parse(string),
        serialize: (params: any): string => queryString.stringify(params || {}),
    },
    withCredentials: false,
    timeout: 1000 * 300
}

const axiosClient:AxiosInstance = axios.create(config);

axiosClient.interceptors.request.use(async(config) => {
    const token = await getTokenLocalStorage();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }

        return response;
    }
);

export default axiosClient;
