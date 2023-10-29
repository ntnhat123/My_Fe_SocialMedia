import { IComment } from "./comment";
import { IUser } from "./user";

export interface IPost {
    _id: string;
    content: string;
    images: string[];
    likes: string[];
    comments: IComment[];
    usercreator : IUser;
    createdAt: string;
    updatedAt: string;
}   