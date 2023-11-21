import { IComment } from "@/model/comment";

export interface ICommentPayload {
    message: string;
    data: IComment[];
    status: boolean;
}