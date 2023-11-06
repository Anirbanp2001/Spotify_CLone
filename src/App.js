import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tokener } from './redux/musicPlayerSlice';
import Spotify from './pages/spotify/Spotify';

function App() {
  const dispatch=useDispatch();
  const { token } = useSelector((state) => state.player2);
  useEffect(()=>{
    const hash=window.location.hash;
    if(hash){
      console.log(hash);
      const token=hash.substring(1).split("&")[0].split("=")[1];
      dispatch(tokener(token));
    }

  },[token,dispatch])
  return (
    <div>
      {token!==null?<Spotify/>:<Login/>}
    </div>
  );
}

export default App;
