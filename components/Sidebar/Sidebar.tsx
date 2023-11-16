import React, { useEffect,useState } from 'react'
import { BiSearch,BiHomeAlt } from 'react-icons/bi'
import { IUser } from '@/model/user'
import { getUserByIds } from '@/api/user/user'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/authContext'
import { SidebarData } from '@/data/sidebar'



const Sidebar = () => {
  const router = useRouter()
  const { user,logout } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    logout();
  };
  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-between h-full w-full md:py-5 md:px-8 bg-white ">
        <div className="flex w-1/4 justify-center items-center gap-5">
          <div className="flex w-14">
            <img
              src="https://cdn.dribbble.com/users/230124/screenshots/16086059/media/55432e3763b3c8c93fd7ba6cde8164ea.jpg?resize=400x0"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex items-center relative rounded-3xl bg-gray-200">
            <BiSearch className="absolute left-0 top-0 mt-2 ml-2 text-black/30" />
            <input
              type="text"
              placeholder="Search"
              className="rounded-3xl px-3 py-1 pl-8 outline-none bg-black/10"
            />
          </div>
          <div className="w-1/4 justify-end md:hidden ">
            <div className="flex items-center justify-center rounded-full bg-gray-400 w-10 h-10 hover:rounded-full">
              <img
                src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/361606265_3446022385728396_458335017174884602_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mNTeqb676rQAX-L0o-q&_nc_ht=scontent.fdad1-4.fna&oh=00_AfA27Ib7d1Lbqj-k75F7ZekKrnwN3ApZjCTfT5EJuMDGTw&oe=651E4190"
                alt="Profile"
                className="rounded-full group-hover:opacity-80"
              />
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
        {/* <div className="w-1/4  justify-end md:flex hidden">
          <p className="p-2 group-hover:opacity-80 font-bold">{user?.fullName}</p>
          <div className="flex items-center justify-center rounded-full overflow-hidden w-10 h-10 hover:rounded-full">
            <Link href={`/profile/${user?._id}`}>
              <img src={user?.avatar} alt="Profile" className="rounded-full group-hover:opacity-80 " style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
            </Link>
          </div>
        </div> */}
        <div className="w-1/4 justify-end md:flex hidden relative">
        <div className="p-2 group-hover:opacity-80 font-bold" onClick={toggleDropdown}>
          {user?.fullName}
        </div>
        <div className="flex items-center justify-center rounded-full overflow-hidden w-10 h-10 hover:rounded-full" onClick={toggleDropdown}>
            <img src={user?.avatar} alt="Profile" className="rounded-full group-hover:opacity-80" style={{ objectFit: 'cover', aspectRatio: '1 / 1' }} />
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-10 bg-white rounded-lg shadow-md">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => router.push(`/profile/${user?._id}`)}>
              Trang cá nhân
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>
              Đăng xuất
            </button>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default Sidebar