import React from "react";
import { IoIosClose, IoMdCall, IoMdSend } from "react-icons/io";
import { GoDash } from "react-icons/go";

const ListChatOfUser = () => {
    return (
            <div className="flex flex-col">
                <div className="flex justify-between px-2 shadow-md  blur-10">
                    <div className='flex items-center my-2 gap-2 cursor-pointer'>
                        <div className='w-10 h-10 rounded-full object-cover overflow-hidden ' >
                            <img src="https://www.shutterstock.com/image-vector/people-icon-user-vector-team-260nw-2283884921.jpg" alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h1 className='font-bold text-xl'>nhat</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="hover:rounded-full hover:bg-gray-200 p-1">
                            <IoMdCall />
                        </div>
                        <div className="hover:rounded-full hover:bg-gray-200 p-1">
                            <GoDash />
                        </div>
                        <div className="hover:rounded-full hover:bg-gray-200 p-1">
                            <IoIosClose />
                        </div>
                    </div>
                </div>
                <div className="flex-grow h-72">
                    <div className="flex px-2">
                            <div className='flex items-center justify-start my-2 gap-2 cursor-pointer'>
                                <div className='w-5 h-5 rounded-full object-cover overflow-hidden ' >
                                    <img src="https://www.shutterstock.com/image-vector/people-icon-user-vector-team-260nw-2283884921.jpg" alt="" className='overflow-hidden w-full object-cover rounded-full' style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
                                </div>
                                <div className='flex flex-col items-start '>
                                    <h1 className='bg-slate-200 px-2 rounded-full text-xl'>nhat</h1>
                                </div>
                            </div>
                    </div>
                    <div className="flex justify-end px-2">
                        <div className='flex items-center justify-start my-2 gap-2 cursor-pointer'>                                    
                            <div className='flex flex-col items-start'>
                                <h1 className='bg-slate-200 px-2 rounded-full text-xl'>nhat</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-2 ">
                    <form className="flex justify-between gap-2" action="">
                        <input type="text" placeholder="Viết tin nhắn..." className="w-full py-1 px-3 rounded-2xl outline-none bg-gray-200" />
                        <button className="hover:bg-gray-200 hover:rounded-full p-2">
                            <IoMdSend />
                        </button>
                    </form>
                </div>
            </div> 
    )
}

export default ListChatOfUser