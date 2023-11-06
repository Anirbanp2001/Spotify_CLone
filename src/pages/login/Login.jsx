import React from 'react';
import './login.scss'
const Login = () => {
    const handleClick=async()=>{
        const clientId="200538e0794748eead4d4c2842b53dcb";
        const redirectUrl="http://localhost:3000";
        const apiUrl="https://accounts.spotify.com/authorize";
        const scope = [
          "user-read-private",
          "user-read-email",
          "user-modify-playback-state",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-read-recently-played",
          "user-top-read",
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
        };      

    
  return (
    <div className='login'>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt=""/>
      <button onClick={handleClick}>Connect to Spotify</button>
    </div>
  );
}

export default Login;
