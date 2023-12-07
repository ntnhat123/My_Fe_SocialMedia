import { IUser } from "./user";

export interface IComment {
    _id: string;
    content: string;
    usercreator: IUser;
    postID: string;
    likes: string[];
    comment: string[];
    reply: string[];
    tag: string;
    commentID : string;
    postUserID : string;
    createdAt: Date;
}