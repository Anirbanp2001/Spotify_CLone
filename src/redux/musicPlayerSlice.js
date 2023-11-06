import { createSlice } from "@reduxjs/toolkit";
const initialState={
    token:null,
    playlists:[],
    userInfo:null,
    currPlayList:"3cEYpjA9oz9GiPac4AsH4n",
    selectedPlaylist:null,
    currentTrack:null,
    currentlyPlaying:false
}

const playerSlice=createSlice({
    name:"player",
    initialState,
    reducers:{
        tokener:(state,action)=>{
            state.token=action.payload;
        },
        playListLoader:(state,action)=>{
            state.playlists=action.payload;
        },
        loadUser:(state,action)=>{
            state.userInfo=action.payload;
        },
        currPlayList:(state,action)=>{
            state.currPlayList=action.payload;
        },
        selectPlayList:(state,action)=>{
            state.selectedPlaylist=action.payload;
        },
        changeCurrentTrack:(state,action)=>{
            state.currentTrack=action.payload;
        },
        changeCurrentlyPlaying:(state,action)=>{
            state.currentlyPlaying=action.payload
        }
    },
})
export const{tokener, playListLoader, loadUser,currPlayList,selectPlayList,changeCurrentTrack,changeCurrentlyPlaying}=playerSlice.actions;
export default playerSlice.reducer;