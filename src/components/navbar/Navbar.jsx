import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/musicPlayerSlice';
import { MdSearch } from 'react-icons/md';
import { CgProfile } from "react-icons/cg";
import './navbar.scss';

const Navbar = ({ navBackground }) => {
  const dispatch=useDispatch();
  const {token,userInfo}=useSelector((state)=>state.player2);
  useEffect(()=>{
    const userInfoLoader=async()=>{
      const response=await axios.get('https://api.spotify.com/v1/me',{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const {data}=response;
      const userInfo={
        id:data.id,
        username:data.display_name
      }
      dispatch(loadUser(userInfo));

    }
    userInfoLoader();
  },[token,dispatch])
  return (
    <div className={`navbar ${navBackground===true?"temp":""}`}>
       <div className='searchBar'>
       <MdSearch />
       <input type='text' placeholder='Search for Artist, Song, Playlist'/>
       </div>
       <div className='user'>
       <CgProfile/>
       <span>{userInfo?.username}</span>
       </div>
    </div>
  );
}

export default Navbar;
