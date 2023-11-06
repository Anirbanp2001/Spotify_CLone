import axios from 'axios';
import './playList.scss'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currPlayList, playListLoader } from '../../redux/musicPlayerSlice';


const PLayList = () => {
    const dispatch=useDispatch();
    const {token,playlists}=useSelector((state)=>state.player2);
    useEffect(()=>{
        const getPlayListData=async()=>{
          const response=await axios.get('https://api.spotify.com/v1/me/playlists',{
            headers:{
             "Authorization":`Bearer ${token}`
            }
          })
          const {items}=response.data;
          const playlists=items.map(({name,id}) => ({name,id}));
          dispatch(playListLoader(playlists));
          
        }
        getPlayListData();
    },[token,dispatch]);
    const changeCurrentPlaylist = (selectedPlaylistId) => {
      dispatch(currPlayList(selectedPlaylistId));
    };
  return (
    <div className='playList'>
    Playlists
      <ul>
      {playlists.map(list=>
        <li key={list.id} onClick={() => changeCurrentPlaylist(list.id)}> {list.name}</li>)
      }
      </ul>
    </div>
  );
}

export default PLayList;
