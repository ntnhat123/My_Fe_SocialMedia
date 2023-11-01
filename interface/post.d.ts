import { IPost } from "@/model/post";

export interface IPostPayload {
    message: string;
    data: IPost[];
    status: boolean;
}

export interface IDeletePostPayload {
    message: string;
    status: boolean;
}