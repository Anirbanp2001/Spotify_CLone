import React, { useRef, useState } from 'react';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './spotify.scss'
const Spotify = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  return (
    <div className='spotify'>
      <div className="upper">
        <div className='left'>
          <Sidebar />
        </div>
        <div className='right' ref={bodyRef} onScroll={bodyScrolled}>
         <Navbar navBackground={navBackground}/>
          <Body headerBackground={headerBackground}/>
        </div>
      </div>
      <div className='lower'><Footer /></div>
    </div>
  );
}

export default Spotify;

