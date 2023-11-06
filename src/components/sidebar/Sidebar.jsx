import React from 'react';
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import './sidebar.scss';
import PLayList from '../playlists/PLayList';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='imgContainer'>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='' />
      </div>
      <ul>
        <li>
          <MdHomeFilled />
          <span>Home</span>
        </li>
        <li>
          <MdSearch />
          <span>Search</span>
        </li>
        <li>
          <IoLibrary />
          <span>Library</span>
        </li>

      </ul>
      <PLayList/>
    </div>
  );
}

export default Sidebar;
