import React from 'react';
import './playerControl.scss'
import {
    BsFillPlayCircleFill,
    BsFillPauseCircleFill,
    BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentTrack, changeCurrentlyPlaying } from '../../redux/musicPlayerSlice';


const PlayerControls = () => {
    const dispatch=useDispatch();
    const {token,currentlyPlaying}=useSelector((state)=>state.player2);
    const changeState = async () => {
        const state = currentlyPlaying ? "pause" : "play";
        await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        dispatch(changeCurrentlyPlaying(true));
    };
    const changeTrack = async (type) => {
        await axios.post(
            `https://api.spotify.com/v1/me/player/${type}`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        dispatch(changeCurrentlyPlaying(true));
        const response1 = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        if (response1.data !== "") {
            const currentPlaying = {
                id: response1.data.item.id,
                name: response1.data.item.name,
                artists: response1.data.item.artists.map((artist) => artist.name),
                image: response1.data.item.album.images[2].url,
            };
            dispatch(changeCurrentTrack(currentPlaying));
        } else {
            dispatch(changeCurrentTrack(null));
        }
    };

    return (
        <div className='playerControls'>
        <div className="shuffle">
        <BsShuffle />
      </div>
      <div className="previous">
        <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
      </div>
      <div className="state">
        {currentlyPlaying ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNext onClick={() => changeTrack("next")} />
      </div>
      <div className="repeat">
        <FiRepeat />
      </div>
        </div>
    );
}

export default PlayerControls;
