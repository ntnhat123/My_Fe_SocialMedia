import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import ListChatOfUser from "./ListChatOfUser";

const ListUserChat = () => {
    const [openTopModal, setOpenTopModal] = useState<boolean>(false);
    const [openBottomModal, setOpenBottomModal] = useState<boolean>(false);

    const handleOpenModals = () => {
        setOpenTopModal(true);
        setOpenBottomModal(false);
    };

    const handleCloseModals = () => {
        setOpenBottomModal(false);
    };
    return (
        <div className="flex flex-col w-full gap-3 px-4">
            <div className={` ${openTopModal ? "hidden" : ""}`} onClick={handleOpenModals}>
                <div className="flex justify-between items-center">
                    <div className="font-bold">
                        Đoạn chat
                    </div>
                    <div className='flex items-center justify-center cursor-pointer rounded-full overflow-hidden w-10 h-10 hover:rounded-full hover:bg-gray-200 '>
                        <FaUsers />
                    </div>
                </div>
                <div className='flex flex-col my-2 gap-2 cursor-pointer'>
                    <div className="flex gap-2 items-center" >
                        <div className='w-10 h-10 rounded-full object-cover overflow-hidden' >
                            <img src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/420438483_1699849067174296_8717679502436451949_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEgu4bUtxgD5zTFvtnna8QIHNiz7XJGm7Ec2LPtckabsd1OVuAdYxlli3ACt9VYat8St3psv8mHHwnV27WeKIJ7&_nc_ohc=bFCKH9ZwULgAX-ruNCc&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBp6RkV8vDIjJlq7vN0r_9Hhg7ElAl2b1tEOMn5YHu6Vg&oe=65B14179" alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
                        </div>              
                        <div className='flex flex-col items-start'>
                            <h1 className='font-bold text-xl'>Nhật</h1>
                            <h1 className='text-gray-500 text-sm'>
                                dsjfds
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
                {
                    openTopModal && (
                        <div className="fixed inset-24 flex z-50" >
                          <div className="absolute right-0 -bottom-24 bg-white rounded shadow-lg md:w-1/4 md:h-4/5" onClick={(e) => e.stopPropagation()}>
                            <ListChatOfUser />
                          </div>
                        </div>
                    )
                }
        </div>
    )
}

export default ListUserChat