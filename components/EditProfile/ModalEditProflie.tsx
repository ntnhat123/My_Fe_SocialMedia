import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostOfUserRequest, getPostRequest } from "@/redux/post/actions";
import { useRouter } from "next/router";
import { useAuth } from "@/context/authContext";
import { getUserByIds, updateUser } from "@/api/user/user";
import { IUser } from "@/model/user";

interface IProps {
  profile: IUser;
  setProfile: Dispatch<SetStateAction<IUser>>,
  openmodelEditUser: boolean;
  setOpenmodelEditUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalEditProfile({
  profile,
  setProfile,
  openmodelEditUser,
  setOpenmodelEditUser,
}: IProps) {
  const { user, editUser } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const [inputImage, setInputImage] = useState<any>(profile.avatar);
  const [inputValue, setInputValue] = useState({
    avatar: inputImage,
    fullName: profile.fullName,
    address: profile.address,
    story: "",
    mobile: "",
    gender: profile.gender,
  });

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editUser(
        router.query.id as string,
        inputValue.fullName,
        inputImage,
        inputValue.gender,
        inputValue.address,
        inputValue.story,
        inputValue.mobile
      );
      console.log(editUser)
      setOpenmodelEditUser(false);
      const response = await getUserByIds(router.query.id as string);
      setProfile(response.data.data)
      dispatch(getPostRequest());
      dispatch(getPostOfUserRequest({ id: router.query.id as string }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = ["image/png", "image/jpeg", "image/jpg"];
    const file = e.target.files?.[0];
    if (file && type.includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setInputImage(null);
      alert("Chỉ được upload file ảnh");
    }
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleUpdateUser} className="flex flex-col justify-center items-center py-5 px-14 gap-y-5">
        <div className="w-32 overflow-hidden rounded-full ">
          <label htmlFor="file-input" className="cursor-pointer">
            <img src={profile.avatar} className="object-cover" alt="" style={{ objectFit: 'cover', aspectRatio: '1 / 1' }}  />
            <input type="file" onChange={handleImageChange} className="hidden" id="file-input" />
          </label>
        </div>
        <div className="w-full justify-center flex flex-col items-start">
          <label htmlFor="fullName" className="text-gray-500">
            Tên
          </label>
          <input type="text" id="fullName" value={inputValue.fullName} onChange={handleInputChange} className="border border-gray-300 rounded-md w-full h-10 px-2" />
        </div>
        <div className="w-full justify-center flex flex-col items-start">
          <label htmlFor="address" className="text-gray-500">
            Địa chỉ
          </label>
          <input type="text" id="address" value={inputValue.address} onChange={handleInputChange} className="border border-gray-300 rounded-md w-full h-10 px-2" />
        </div>
        <div className="w-full justify-center flex flex-col items-start">
          <label htmlFor="story" className="text-gray-500">
            Tiểu sử
          </label>
          <input name="" id="story" value={inputValue.story} onChange={handleInputChange} className="border border-gray-300 rounded-md w-full h-10 px-2" />
        </div>
        <div className="w-full justify-center flex items-start gap-4">
          <div>
            <label htmlFor="male" className="inline-flex items-center">
              <input type="radio" id="male" name="gender" value="male" className="htmlForm-radio h-5 w-5 text-blue-600" />
              <span className="ml-2">Nam</span>
            </label>
          </div>
          <div>
            <label htmlFor="female" className="inline-flex items-center">
              <input type="radio" id="female" name="gender" value="female" className="form-radio h-5 w-5 text-pink-600" />
              <span className="ml-2">Nữ</span>
            </label>
          </div>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-16 py-2 rounded-md">
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}
