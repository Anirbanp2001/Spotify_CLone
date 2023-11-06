import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentTrack} from '../../redux/musicPlayerSlice';

const CurrentTrack = () => {
    const dispatch = useDispatch();
    const { token , currentTrack } = useSelector((state) => state.player2);
    useEffect(() => {
        const getCurrentTrackData=async()=>{
            const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            if (response.data !== "") {
                const currentTracks = {
                    id: response.data.item.id,
                    name: response.data.item.name,
                    artists: response.data.item.artists.map((artist) => (artist.name)),
                    image: response.data.item.album.images[2].url,

                }
                dispatch(changeCurrentTrack(currentTracks));
            }

        }
        getCurrentTrackData();
    }, [token, dispatch]);
    return (
        <div className='currentTrack'>
             {currentTrack && (
        <div className="track">
          <div className="track__image">
            <img src={currentTrack.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentTrack.name}</h4>
            <h6 className="track__info__track__artists">
              {currentTrack.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
        </div>
    );
}

export default CurrentTrack;
