import React, { useState } from 'react';
import { toggleSearch } from '../redux/toggleSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

const Sidebar = ({toggleSearchBarVisibility}) => {
  const dispatch = useDispatch()
  const search = useSelector((store)=>store.toggle.searchToggle)
  const [showMenu , setShowMenu] = useState(false)
  const navigate = useNavigate()

    function menuHandler() {
      setShowMenu(!showMenu);
      toggleSearchBarVisibility(); // Toggle search bar visibility
    }

    function clickHandler(){
      navigate('/')
      if(search){
       dispatch(toggleSearch())
      }

    }
  return (
    <>
      <p className={` md:hidden flex absolute top-8 left-3 z-40 `} onClick={menuHandler}>
        {!showMenu ? ( <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
) : (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>)}
       </p>

       <div className=' md:flex-col md:block lg:flex-col lg:block hidden h-[100vh] w-60  text-white px-4 py-10 bg-gradient-to-tr from-[#000000] to-[#434343]'>
      <img
        alt=""
        src="//music.youtube.com/img/ringo2/on_platform_logo_dark.svg"
        className="w-full h-10 object-contain mt-2"
      />

      <div className='flex flex-row my-8 justify-start items-center gap-x-2 ml-[3.2rem] mt-16 cursor-pointer hover:text-gray-600 z-50'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1e9e9" viewBox="0 0 256 256">
          <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" ></path>
        </svg>
        <p className="text-1xl" onClick={clickHandler}>Home</p>
        </div>

      <div className='flex flex-row my-8 justify-start items-center gap-x-2 ml-[3.2rem] hover:text-gray-600'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1e9e9" viewBox="0 0 256 256">
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
        </svg>
        <Link to="/profile" >Profile</Link>
      </div>

      <div className='flex flex-row my-8 justify-start items-center gap-x-2 ml-[3.2rem] hover:text-gray-600'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1e9e9" viewBox="0 0 256 256">
          <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H160a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm135.66-57.7a8,8,0,0,1-10,5.36L208,122.75V192a32.05,32.05,0,1,1-16-27.69V112a8,8,0,0,1,10.3-7.66l40,12A8,8,0,0,1,247.66,126.3ZM192,192a16,16,0,1,0-16,16A16,16,0,0,0,192,192Z"></path>
        </svg>
        <p className="text-1xl">Playlist</p>
      </div>

      <div className='flex flex-row my-8 justify-start items-center gap-x-2 ml-[3.2rem] hover:text-gray-600'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1e9e9" viewBox="0 0 256 256">
          <path d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"></path>
        </svg>
        <p className='text-1xl'>Liked</p>
      </div>
    </div>


    <div
        className={`absolute top-0 h-screen w-2/3 bg-graident-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          showMenu ? "left-0" : "-left-[100rem]"
        }`}
      >
         <img
        alt=""
        src="//music.youtube.com/img/ringo2/on_platform_logo_dark.svg"
        className="w-full h-10 object-contain mt-2"
      />

      <div className='flex flex-row my-8 justify-start items-center gap-x-2 ml-[3.2rem] mt-16 cursor-pointer hover:text-gray-600'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1e9e9" viewBox="0 0 256 256">
          <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" ></path>
        </svg>
        <p className="text-1xl" onClick={clickHandler}>Home</p>
      </div>

      <div className='flex flex-row my-8 justify-start items-center gap-x-2 ml-[3.2rem] hover:text-gray-600'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1e9e9" viewBox="0 0 256 256">
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
        </svg>
        <Link to="/profile" >Profile</Link>
      </div>

      <div className='flex flex-row my-8 justify-start items-center gap-x-2 ml-[3.2rem] hover:text-gray-600'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1e9e9" viewBox="0 0 256 256">
          <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H160a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm135.66-57.7a8,8,0,0,1-10,5.36L208,122.75V192a32.05,32.05,0,1,1-16-27.69V112a8,8,0,0,1,10.3-7.66l40,12A8,8,0,0,1,247.66,126.3ZM192,192a16,16,0,1,0-16,16A16,16,0,0,0,192,192Z"></path>
        </svg>
        <p className="text-1xl">Playlist</p>
      </div>

      <div className='flex flex-row my-8 justify-start items-center gap-x-2 ml-[3.2rem] hover:text-gray-600'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f1e9e9" viewBox="0 0 256 256">
          <path d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"></path>
        </svg>
        <p className='text-1xl'>Liked</p>
      </div>
      </div>

    </>
  );
}

export default Sidebar;
