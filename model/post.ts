import { IUser } from "./user";

export interface IPost {
    content: string;
    images: string[];
    likes: string[];
    comments: string[];
    usercreator : IUser;
    createdAt: string;
    updatedAt: string;
}   