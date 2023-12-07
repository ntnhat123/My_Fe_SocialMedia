import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaUserTag } from 'react-icons/fa';
import { IoMdImages } from 'react-icons/io';
import { MdInsertEmoticon, MdVideocam } from 'react-icons/md';
import { IUser } from '@/model/user';
import { useAuth } from '@/context/authContext';
import { updatePosts } from '@/api/post/post';
import { useDispatch, useSelector } from 'react-redux';
import { getPostOfUserRequest, getPostRequest } from '@/redux/post/actions';
import { useRouter } from 'next/router';
import { IPost } from '@/model/post';

interface IEditPost {
  postEdit: IPost ;
  setPost: React.Dispatch<React.SetStateAction<IPost[]>>;
  openmodelEditPost: boolean;
  setOpenmodelEditPost: React.Dispatch<React.SetStateAction<boolean>>;
  hanldeOpen : () => void;
  handleClose : () => void;
}

const EditPost = ({ postEdit, setPost, openmodelEditPost, setOpenmodelEditPost,handleClose,hanldeOpen }: IEditPost) => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const [showButtonBackground, setShowButtonBackground] = useState(false);
  const dispatch = useDispatch();
  const [inputImage, setInputImage] = useState<any>(postEdit.images);
  const [inputValue, setInputValue] = useState({
    content: postEdit.content,
    images: inputImage,
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user?._id !== postEdit.usercreator._id) {
      alert('Bạn không có quyền chỉnh sửa bài viết này');
      return;
    }

    try {
      const res = await updatePosts(postEdit._id, inputValue.content, inputImage);
      console.log(res)
      setPost(res.data);
      dispatch(getPostOfUserRequest({ id: user._id as string }));
      dispatch(getPostRequest());
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.id]: e.target.value,
    });
    if (e.target.value.length > 0) {
      setShowButtonBackground(true);
    } else {
      setShowButtonBackground(false);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = ['image/png', 'image/jpeg', 'image/jpg'];
    const file = e.target.files?.[0];
    if (file && type.includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setInputImage(null);
      alert('Chỉ được upload file ảnh');
    }
  };

  return (
    <div className="absolute bg-white rounded shadow-lg w-[500px] " onClick={(e) => e.stopPropagation()}>
      <div className="py-2 border-b-2 flex items-center justify-center">
        <h1 className="font-bold text-2xl">Chỉnh sửa bài viết</h1>
      </div>
      <div className="flex w-full ">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex justify-start items-center mx-4 gap-2 my-2 ">
            <div className="w-10 h-10 overflow-hidden rounded-full  bg-slate-500">
              <img src={user?.avatar} alt="" className="overflow-hidden w-full object-cover rounded-full" style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
            </div>
            <div className="font-bold">
              <h1>{user?.fullName}</h1>
            </div>
          </div>
          <div className="w-full mb-14">
            <input type="text" id="content" value={ inputValue.content }
              onChange={handleInputChange}
              className="w-full h-full px-4 outline-none text-2xl"
              placeholder="Bạn đang nghĩ gì ?"
            />
          </div>
          <div className="mx-4 flex">
            <div className="flex w-full gap-3 justify-center items-center rounded-xl border-2 p-4 ">
              <h1 className="font-bold">Thêm vào bài viết của bạn</h1>
              <label htmlFor="file-input" className="cursor-pointer">
                <div className="hover:bg-slate-200 p-2 rounded-full text-lime-500">
                  <IoMdImages size={30} />
                  <input type="file" onChange={handleImageChange} className="hidden" id="file-input" />
                </div>
              </label>
              <div className="hover:bg-slate-200 p-2 rounded-full text-blue-500">
                <FaUserTag size={30} />
              </div>
              <div className="hover:bg-slate-200 p-2 rounded-full text-yellow-500">
                <MdInsertEmoticon size={30} />
              </div>
              <div className="hover:bg-slate-200 p-2 rounded-full text-red-600">
                <FaMapMarkerAlt size={30} />
              </div>
            </div>
          </div>
          <div className="w-full px-4 pb-4">
            <button
              className={`w-full ${showButtonBackground ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300'} text-white font-bold py-2 px-4 rounded mt-4`}
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
