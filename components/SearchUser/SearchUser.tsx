import { IUser } from '@/model/user';
import { useRouter } from 'next/router';
import React from 'react';

export interface IListSearchUser {
    listUser: IUser[];
    debouncedValue: string;
    setInputValue : (value : string) => void;
    setDebouncedValue : (value : string) => void;
}

const SearchUser = (
    {listUser,debouncedValue,setInputValue,setDebouncedValue}:IListSearchUser
) => {
    const router = useRouter()
    let timeoutId: NodeJS.Timeout;
    return (
        <div>
            {
                debouncedValue && listUser.length > 0 && (
                    <div className="absolute top-24 md:left-20 left-0 md:w-1/5 w-full rounded-lg shadow-md">
                        {
                            listUser.map((user) => (
                                <div key={user._id} className="flex items-center justify-start w-full px-4 py-2 cursor-pointer hover:bg-slate-300" onClick={() => router.push(`/profile/${user._id}`)} >
                                    <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                                    <div className="ml-2">{user.fullName}</div>
                                </div>
                            ))
                        }        
                    </div>
                )
            }
        </div>
    );
};
export default SearchUser;