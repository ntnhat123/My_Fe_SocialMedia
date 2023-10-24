export interface IUser {
    _id: string;
    fullName: string;
    email: string;
    password: string;
    avatar: string;
    gender: string;
    mobile: string;
    address: string;
    story: string;
    website: string;
    followers: string[];
    following: string[];
    saved: any[];
    createdAt: string;
    updatedAt: string;
}
