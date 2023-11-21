import { IUser } from "./user";

export interface IComment {
    _id: string;
    content: string;
    likes: string[];
    comments: string[];
    usercreator: IUser;
    tag: string;
    postID: string;
    commentID : string;
    postUserID : string;
}