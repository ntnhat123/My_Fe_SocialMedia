import { IUser } from "@/model/user";

export interface IUserPayload {
    status: boolean;
    data : IUser[];
}

export interface IInforUserPayload {
    status: boolean;
    data : IUser;
    message: string;
}