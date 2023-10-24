import { IUser } from "@/model/user";

export interface ILoginByEmail {
    email: string;
    password: string;
}

export interface ILoginByGmailPayload {
    status: string;
    message: string;    
    data: IUser;
    token: string;
}