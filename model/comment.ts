import { IUser } from "./user";

export interface IComment {
    _id: string;
    content: string;
    usercreator: IUser;
    postID: string;
    likes: string[];
    comment: string[];
    tag: string;
    commentID : string;
    postUserID : string;
}