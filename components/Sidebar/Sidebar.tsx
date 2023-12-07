import React, { useEffect,useState } from 'react'
import { BiSearch,BiHomeAlt } from 'react-icons/bi'
import { IUser } from '@/model/user'
import { getUserByIds } from '@/api/user/user'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/authContext'
import { SidebarData } from '@/data/sidebar'
import { FaRegUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { searchUsers } from '@/api/user/user'
import SearchUser from '../SearchUser/SearchUser'

const Sidebar = () => {
  const router = useRouter()
  const { user,logout } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState("");
  const [listUser, setListUser] = React.useState<IUser[]>([]);
  let timeoutId: NodeJS.Timeout;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setDebouncedValue(newValue);
    }, 200);
  };
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await searchUsers(debouncedValue, user?._id as string);
        const responseData = res.data;
        const userList = Array.isArray(responseData) ? responseData : [responseData];
        setListUser(userList);
      } catch (error) {
        console.log(error);
      }
    };
    if (debouncedValue) {
      fetchData();
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [debouncedValue]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-between h-full w-full md:py-5 md:px-8 bg-white ">
        <div className="flex w-1/4 justify-center items-center gap-5">
          <div className="flex w-14">
            <img src="https://cdn.dribbble.com/users/230124/screenshots/16086059/media/55432e3763b3c8c93fd7ba6cde8164ea.jpg?resize=400x0" alt="" className="w-full" />
          </div>
          <div>

            <div className="flex items-center relative rounded-3xl bg-gray-200">
              {/* search */}
              <BiSearch className="absolute left-0 top-0 mt-2 ml-2 text-black/30" />
              <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search" className="rounded-3xl px-3 py-1 pl-8 outline-none bg-black/10" />
            </div>
            { debouncedValue && (
              <div>
                  {listUser.length > 0 && (
                    <div className="absolute top-24 md:left-20 left-0 md:w-1/5 w-full rounded-lg shadow-md">
                      {listUser.map((user) => (
                        <div key={user._id} className="flex items-center justify-start w-full px-4 py-2 cursor-pointer hover:bg-slate-300" onClick={() => router.push(`/profile/${user._id}`)} >
                          <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                          <div className="ml-2">{user.fullName}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
            )}
            <SearchUser 
              listUser={listUser}
              debouncedValue={debouncedValue}
              setInputValue={setInputValue}
              setDebouncedValue={setDebouncedValue}
            />
          </div>
          <div className="w-1/4 justify-end md:hidden ">
            <div className="flex items-center justify-center rounded-full bg-gray-400 w-10 h-10 hover:rounded-full">
              <img src={user?.avatar} alt="Profile" className="rounded-full group-hover:opacity-80" style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
            </div>
          </div>
        </div>
        <div className="flex md:w-2/4 w-full justify-center gap-2">
          {SidebarData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-center justify-center"
              >
                <button className="flex items-center justify-center rounded-lg hover:bg-gray-200 w-full py-3">
                  {item.icon}
                </button>
                <span className="hidden group-hover:block">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="w-1/4 justify-end md:flex hidden relative cursor-pointer">
          <div className="p-2 group-hover:opacity-80 font-bold " onClick={toggleDropdown}>
              {user?.fullName}
            </div>
            <div className="flex items-center justify-center rounded-full overflow-hidden w-10 h-10 hover:rounded-full" onClick={toggleDropdown}>
                <img src={user?.avatar} alt="Profile" className="rounded-full group-hover:opacity-80" style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-10 bg-white rounded-lg shadow-md">
                <button className=" flex gap-2 justify-end items-center w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => router.push(`/profile/${user?._id}`)}>
                  Trang cá nhân<FaRegUser />
                </button>
                <button className="flex gap-2 justify-end items-center w-full text-left px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>
                  Đăng xuất<TbLogout />
                </button>
              </div>
            )}
          </div>
      
      </div>
    </>
  );
}

export default Sidebar